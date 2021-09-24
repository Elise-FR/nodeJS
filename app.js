const express = require("express");
const app = express();

const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/product", (req, res) => {
  res.sendFile(__dirname + "/product.html");
});

app.get("/displayProduct/:id", (req, res) => {
  console.log(req.params);
  res.sendFile(__dirname + "/displayProduct.html");
});

app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});
