const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      default: "",
    },
    images: {
      type: [String],
      default: [],
    },
    progetto: {
      type: String,
      default: "",
      trim: true,
    },
    location: {
      type: String,
      default: "",
      trim: true,
    },
    anno: {
      type: String,
      default: "",
      trim: true,
    },
    cliente: {
      type: String,
      default: "",
      trim: true,
    },
    attivita: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.set("toJSON", {
  versionKey: false,
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.link = `/progetti/${returnedObject.slug}`;
    delete returnedObject._id;
    return returnedObject;
  },
});

module.exports = mongoose.models.Project || mongoose.model("Project", projectSchema);
