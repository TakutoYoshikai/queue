#!/usr/bin/env node

const express = require("express");
const app = express();

const queue = [];

app.post("/:text", (req, res) => {
  queue.push(req.params.text);
  res.status(201).send("registered");
});

app.get("/", (req, res) => {
  res.status(200).send(queue.shift());
});

app.listen(3000);
