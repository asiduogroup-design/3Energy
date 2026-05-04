const crypto = require("crypto");

const TOKEN_TTL_MS = 1000 * 60 * 60 * 12;

function getAdminUsername() {
  return process.env.ADMIN_USERNAME || "admin";
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "3energy2026";
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || getAdminPassword() || "3energy-admin-session";
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function isValidAdminCredentials(username, password) {
  return safeEqual(username, getAdminUsername()) && safeEqual(password, getAdminPassword());
}

function signPayload(payload) {
  return crypto.createHmac("sha256", getSessionSecret()).update(payload).digest("base64url");
}

function createAdminToken(username) {
  const payload = Buffer.from(
    JSON.stringify({
      username,
      expiresAt: Date.now() + TOKEN_TTL_MS,
    })
  ).toString("base64url");

  return `${payload}.${signPayload(payload)}`;
}

function verifyAdminToken(token) {
  if (!token || typeof token !== "string") {
    return null;
  }

  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, signPayload(payload))) {
    return null;
  }

  try {
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!decoded.expiresAt || decoded.expiresAt < Date.now()) {
      return null;
    }

    return decoded;
  } catch {
    return null;
  }
}

function requireAdmin(req, res, next) {
  const authorizationHeader = req.headers.authorization || "";
  const token = authorizationHeader.startsWith("Bearer ")
    ? authorizationHeader.slice("Bearer ".length)
    : "";

  const session = verifyAdminToken(token);
  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  req.admin = session;
  return next();
}

module.exports = {
  createAdminToken,
  isValidAdminCredentials,
  requireAdmin,
};
