const express = require("express");
const router = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/api", router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("server is up.");
});
