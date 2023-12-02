const router = require("express").Router();

router.use("/api/student", (req, res, next) => {
  res.status(200).json({
    data: null,
    success: true,
    message: "Api is runnig",
  });
  next();
});

module.exports = router;
