const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Project = require("./models/Project");
const { createAdminToken, isValidAdminCredentials, requireAdmin } = require("./utils/auth");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeString(value) {
  return String(value || "").trim();
}

function normalizeImages(images, image) {
  const imageList = Array.isArray(images) ? images : [images];
  return [...new Set([...imageList, image].map(normalizeString).filter(Boolean))].slice(0, 12);
}

async function createUniqueSlug(title) {
  const baseSlug = slugify(title) || "progetto";
  let slug = baseSlug;
  let index = 2;

  while (await Project.exists({ slug })) {
    slug = `${baseSlug}-${index}`;
    index += 1;
  }

  return slug;
}

function normalizeProjectBody(body) {
  const title = normalizeString(body.title);
  const images = normalizeImages(body.images, body.image);

  return {
    title,
    image: images[0] || "",
    images,
    progetto: normalizeString(body.progetto),
    location: normalizeString(body.location),
    anno: normalizeString(body.anno),
    cliente: normalizeString(body.cliente),
    attivita: normalizeString(body.attivita),
  };
}

app.get("/", (_req, res) => {
  res.json({ message: "3Energy API is running" });
});

app.get("/api/health", (_req, res) => {
  res.json({ message: "3Energy API is running" });
});

app.post("/api/auth/login", (req, res) => {
  const username = normalizeString(req.body.username);
  const password = String(req.body.password || "");

  if (!isValidAdminCredentials(username, password)) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  return res.json({ token: createAdminToken(username) });
});

app.get("/api/projects", async (_req, res, next) => {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();

    return res.json({
      projects: projects.map((project) => ({
        ...project,
        id: project._id.toString(),
        link: `/progetti/${project.slug}`,
        _id: undefined,
        __v: undefined,
      })),
    });
  } catch (error) {
    return next(error);
  }
});

app.post("/api/projects", requireAdmin, async (req, res, next) => {
  try {
    await connectDB();
    const projectBody = normalizeProjectBody(req.body);

    if (!projectBody.title) {
      return res.status(400).json({ message: "Project title is required." });
    }

    const project = await Project.create({
      ...projectBody,
      slug: await createUniqueSlug(projectBody.title),
    });

    return res.status(201).json({ project: project.toJSON() });
  } catch (error) {
    return next(error);
  }
});

app.delete("/api/projects/:id", requireAdmin, async (req, res, next) => {
  try {
    await connectDB();
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found." });
    }

    return res.json({ id: req.params.id });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error(error);

  if (error.name === "CastError") {
    return res.status(400).json({ message: "Invalid project id." });
  }

  if (error.code === 11000) {
    return res.status(409).json({ message: "A project with this slug already exists." });
  }

  return res.status(500).json({ message: "Server error." });
});

module.exports = app;
