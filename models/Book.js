const Base = require("./BaseSchema"); // we have to make sure our Book schema is aware of the Base schema

const Book = Base.discriminator(
  "Book",
  new mongoose.Schema({
    author: { type: String, required: true },
  })
);

module.exports = mongoose.model("Book");
