//Mongooes discriminator
const mongoose = require("mongoose");

const baseOptions = {
  discriminatorKey: "itemtype", // our discriminator key, could be anything
  collection: "items", // the name of our collection
};

// Our Base schema: these properties will be shared with our "real" schemas
const Base = mongoose.model(
  "Base",
  new mongoose.Schema(
    {
      createdOn: { type: Date, default: Date.now() },
      modifiedOn: { type: Date, default: Date.now() },
      disabled: { type: Boolean, default: false },
    },
    baseOptions
  )
);

module.exports = mongoose.model("Base");
