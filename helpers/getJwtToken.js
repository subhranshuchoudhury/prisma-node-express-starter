const jwt = require("jsonwebtoken");
require("dotenv").config();

const getJwtToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7 days",
  });
};

module.exports = { getJwtToken };
