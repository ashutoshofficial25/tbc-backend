exports.signup = (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;

    if (!password || !email || !name || !mobile) {
      return res
        .status(400)
        .json({ error: ture, message: "All fields are required" });
    }

    return res.json({
      data: "",
      message: "Success",
      error: false,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      data: null,
      message: "Error occured!",
      error: error,
    });
  }
};

exports.login = (req, res) => {
  try {
    const { mobile, email, password } = req.body;
  } catch (error) {
    return res.json({
      data: null,
      message: "Error occured!",
      error: error,
    });
  }
};
