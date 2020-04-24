const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET_JWT;
module.exports = function (req, res, next) {
  const token = req.header("token");
  if (!token)
    return res.status(401).json({
      msg: "Auth error",
    });
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(500).json({ msg: "Invalid token" });
  }
};
