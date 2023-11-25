const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Server is up and running.",
  });
  next();
});

app.use(bodyParser.json());

const PORT = 5001;

app.listen(PORT, () => {
  console.log("server 2 is up and running");
});
