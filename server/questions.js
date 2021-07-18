"use strict";
const express = require("express");
let router = express.Router();
let db;
let questions;

const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://esty:st322367475@cluster0.ezds5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
  connectionString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);
    db = client.db("Tzimmers");
    questions = db.collection("questions");
  }
);

/*
get all questions Excepted url : 'http://localhost:8080/questions/getAll'  method: GET
 */
router.get("/getAll", (req, res) => {
    questions
      .find()
      .toArray()
      .then((result) => {
        res.json(result);
      });
  });


module.exports = router;
