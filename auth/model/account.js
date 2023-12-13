const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: { type: String, enum: ["admin", "student"], default: "student" },
  mobile: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: { type: String },
  courses_opted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  courses_query: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  remark: String,
});
