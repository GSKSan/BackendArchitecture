const mongoose = require("mongoose");

const Base = require("./BaseSchema");

const User = Base.discriminator(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);

// export model user with UserSchema
module.exports = mongoose.model("User");
