require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, JWT_PRIVATE_KEY);
    req.userId = decoded.userId;
    return next();
  } 

  return next();
}

module.exports = { verifyToken };
