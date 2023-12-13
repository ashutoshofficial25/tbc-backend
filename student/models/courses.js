const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
  schedule: {
    startDate: Date,
    endDate: Date,
    days: [{ type: String }],
  },
  price: Number,
  price: { type: Number, required: true },
  prerequisites: [{ type: String }],
  duration: { type: String },
  tags: [{ type: String }],
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }],
});

const Courses = mongoose.model("Course", schema);

module.exports = Courses;
