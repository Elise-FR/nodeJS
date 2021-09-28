const express = require("express");
const app = express();
const level = require("level");
const db = level("my-db", { valueEncoding: "json" });
app.use(express.json());
const port = parseInt(process.env.PORT || "3000", 10);
app.use(express.static("public"));

//créer un movie
app.post("/", async (req, res) => {
  if (!(req.body.id && req.body.grade && req.body.comment)) {
    res.status(404).end();
  }
  await db.put(req.body.id, req.body);
  console.log(req.body);
  res.status(201).json(req.body);
});

// afficher un movie
app.get("/movie/:id", async (req, res) => {
  try {
    let movie = await db.get(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).end();
  }
});

//modifier un movie

app.put("/movie/:id", async (req, res) => {
  await db.put(req.body.id, req.body);
  res.status(201).json(req.body);
});

//supprimer un movie
app.delete("/movie/:id", async (req, res) => {
  await db.del(req.params.id);
  res.status(204).end();
});

//créer ma liste movie
app.post("/listemovie", async (req, res) => {
  if (!(req.body.id && req.body.label && req.body.liste)) {
    res.status(404).end();
  }
  await db.put(req.body.id, req.body);
  console.log(req.body);
  res.status(201).json(req.body);
});
//afficher ma liste movie :

app.get("/listemovie/:id", async (req, res) => {
  try {
    let listmovie = await db.get(req.params.id);
    res.status(200).json(listmovie);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

//modifier ma listemovie :

app.put("/listemovie/:id", async (req, res) => {
  await db.put(req.body.id, req.body);
  res.status(201).json(req.body);
});

//supprimer ma liste movie:
app.delete("/listemovie/:id", async (req, res) => {
  await db.del(req.params.id);
  res.status(204).end();
});

//ajouter un film à ma liste movie:

app.post("/listemovie/:id/movie_id", async (req, res) => {
  try {
    let listeTab = await db.get(req.params.id);
    listeTab.liste.push(req.body.movie_id);
    db.put(req.params.id, listeTab);
    console.log(listeTab);
    res.status(201).json(listeTab);
  } catch (err) {
    res.status(404).json(error.message);
  }
});

//supp film à ma liste movie:
app.delete("/listemovie/:id/movie/:movie_id", async (req, res) => {
  console.log(req.params);
  let listeMovie = await db.get(req.params.id);
  console.log(listeMovie);
  listeMovie.liste = listeMovie.liste.filter(
    (value) => value != req.params.movie_id
  );
  console.log(listeMovie);

  db.put(req.params.id, listeMovie);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});
