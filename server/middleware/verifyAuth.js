const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require('./../config/config.json')

const verifyAuth = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const isAdmin = function (req, res, next) {
  const user = req.user
  if (user.role === "admin") next();
  else {
    res.status(401).json({ message: 'Unauthorized user.!' });
  }
 
};

module.exports = { verifyAuth, isAdmin };
