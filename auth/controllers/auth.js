exports.signup = (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;

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
