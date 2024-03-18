const { getJwtToken } = require("../helpers/getJwtToken");

const cookieToken = (req, res, user) => {
  const token = getJwtToken(user.id);
  user.password = undefined;
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: "none",
    secure: true,
    user,
  });
};

module.exports = cookieToken;
