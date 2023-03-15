const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const db = require("./queries");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({ info: "Node.js,Express, Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUsersById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
