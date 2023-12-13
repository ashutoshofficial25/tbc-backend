const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ error: true, message: "Authorization is required" });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.STUDENT_SECRET, {}, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error, message: "Invalid token" });
    }
    req.user = decoded;
  });

  next();
};
