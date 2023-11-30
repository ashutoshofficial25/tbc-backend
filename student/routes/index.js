const router = require("express").Router();

router.use("/api/student", (req, res, next) => {
  res.status(200).json({
    data: null,
    success: true,
    message: "Api is running",
  });
  next();
});

module.exports = router;
