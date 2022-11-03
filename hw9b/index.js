const express = require("express");

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("css"));

app.get("/", (req, res) => {
  res.sendFile("views/index.html", { root: __dirname });
});

app.get("/ex1", (req, res) => {
  res.sendFile("views/ex1.html", { root: __dirname });
});
app.post("/ex1", (req, res) => {
  res.json({ message: `${req.body.name}, Thank you for your order. We will keep you posted on delivery status at ${req.body.email}` });
});

app.get("/ex2", (req, res) => {
  res.sendFile("views/ex2.html", { root: __dirname });
});
app.post("/api/countries", (req, res) => {
  res.json({ message: `Your name is ${req.body.name} and you have visited ${req.body.visitedCountries.length} countries. Keep traveling !` });
});

app.get("/ex3", (req, res) => {
  res.sendFile("views/ex3.html", { root: __dirname });
});
const artciles = []
app.post("/articles", (req, res) => {
  let id = Math.max(...artciles.map((article) => article.id), 0) + 1;
  artciles.push({ id, ...req.body });
  res.json({ message: `New artcile added successfully with the title "${req.body.title}" and ID ${id}!` });
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
