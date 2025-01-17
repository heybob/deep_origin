import express, { json } from "express";
import {talbeData, assignees} from "./data.js";
const app = express();
const port = 3001;

// Middleware
app.use(json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/assignees/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  let key = req.query.name;
  let size = 25;
  if (!key) {
    res.send([]);
  } else {
    let filteredAssgnees = assignees.filter((assignee) => {
      return assignee.name.toLowerCase().includes(key.toLowerCase());
    });
    res.send(filteredAssgnees.sort().slice(0, size));
  }
});

app.get("/tabledata", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(talbeData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
