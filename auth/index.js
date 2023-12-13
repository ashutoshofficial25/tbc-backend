const express = require("express");
const router = require("./routes");
const bodyParser = require("body-parser");
const { boot } = require("./utils/boot");
const config = require("./config");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "server is up and runnin",
  });
  next();
});

app.use("/api", router);

console.log(process.env.MONGO_URI);

const PORT = 5000;

app.listen(PORT, async () => {
  console.log("server is up. and updated");
  await boot();
});
