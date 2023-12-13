const mongoose = require("mongoose");

exports.boot = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Booted successfully");
};
