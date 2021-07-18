"use strict";
const express = require("express");
let router = express.Router();
let db;
let chat;
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://esty:st322367475@cluster0.ezds5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
  connectionString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);
    db = client.db("Tzimmers");
    chat = db.collection("chat");
  }
);

/*
get all chat
 Excepted url : 'http://localhost:8080/chat/getChat'  method: GET
 */
router.get("/getChat", (req, res) => {
    chat
      .find()
      .toArray()
      .then((result) => {
        res.json(result);
      });
  });

/*
add response to chat
 Excepted url : 'http://localhost:8080/chat/addResponse'  method: POST
 Excepted body: JSON{
     "name": "---",
     "id":"----",
     "statuse":"zimer" | "user"
     "value": ---,
     "date": --/--/----
     "time":"--:--:--"
 }
 */
router.post("/addResponse", (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const properties = ["id","name","statuse","value","date","time"];
  if (!properties.every((property) => property in req.body)) {
    res.status(400).json({
      error:
        "name, id, statuse, value, date and  time required",
    });
    console.log("POST", 400, fullUrl);
    return;
  }
  chat.insertOne(req.body.massage).then(() => {
    res.send("ok");
  });
});


module.exports = router;
