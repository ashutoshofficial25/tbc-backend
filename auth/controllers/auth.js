const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, mobile, courses_query, remark } = req.body;

    if (!password || !email || !name || !mobile) {
      return res
        .status(400)
        .json({ error: ture, message: "All fields are required" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

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
