const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const PORT = 5001;

app.listen(PORT, () => {
  console.log("server 2 is up and running");
});
