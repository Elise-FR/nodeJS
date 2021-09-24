const express = require("express");
const app = express();
const level = require("level");
const db = level("my-db", { valueEncoding: "json" });
app.use(express.json());
const port = 3000;
app.use(express.static("public"));

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

app.post("/listmovie", async (req, res) => {
  await db.put(req.body.id, req.body);
  console.log(req.body);
  res.status(201).json(req.body);
});

app.get("/listmovie/:id", async (req, res) => {
  try {
    let listmovie = await db.get(req.params.id);
    res.status(200).json(listmovie);
  } catch (error) {
    res.status(404).end();
  }
});

app.put("/listmovie/:id", async (req, res) => {
  await db.put(req.params.id, req.body);
  res.status(201).json(req.body);
});

app.delete("/listmovie/:id", async (req, res) => {
  await db.del(req.params.id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});
