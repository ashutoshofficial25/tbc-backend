exports.createCourse = (req, res) => {
  const {} = req.body;

  res.status(200).json({
    data: {},
    message: "Added successfully",
    error: false,
  });
};
