const express = require("express");
const app = express();
const level = require("level");
const db = level("my-db", { valueEncoding: "json" });
app.use(express.json());
const port = 3000;
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/product", (req, res) => {
//   res.sendFile(__dirname + "/product.html");
// });

// app.get("/displayProduct/:id", (req, res) => {
//   console.log(req.params);
//   res.sendFile(__dirname + "/displayProduct.html");
// });

app.post("/", async (req, res) => {
  await db.put(req.body.id, req.body);
  console.log(req.body);
  res.status(201).json(req.body);
});

app.get("/movie/:id", async (req, res) => {
  try {
    let movie = await db.get(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).end();
  }
});

app.put("/movie/:id", async (req, res) => {
  await db.put(req.params.id, req.body);
  res.status(201).json(req.body);
});

app.delete("/movie/:id", async (req, res) => {
  await db.del(req.params.id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});
