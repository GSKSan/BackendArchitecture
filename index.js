require("dotenv").config();
const user = require("./routes/user");
const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/user", user);

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
