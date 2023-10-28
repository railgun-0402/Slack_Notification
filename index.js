const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (_, res) {
  res.send("Hello express");
});

app.listen(port, function () {
  console.log("Node.js Server Started http://localhost:" + port);
});
