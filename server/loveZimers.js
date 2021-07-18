"use strict";
const express = require("express");
let router = express.Router();
let db;
let users;
let zimers;
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://esty:st322367475@cluster0.ezds5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
  connectionString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);
    db = client.db("Tzimmers");
    users = db.collection("users");
    zimers = db.collection("zimers");
  }
);

/*
clear spesific user love zimers
Excepted url : 'http://localhost:8080/loveZimers/clearLoveZimers/?id=id'  method: PUT
 */
router.put("/clearLoveZimers/:id", (req, res) => {
  users
    .updateOne(
      { id: req.params.id },
      { $set: { loveZimers: [] } }
    )
    .then(() => {
      res.send("ok");
    });
});

/*
get spesific user love zimers
Excepted url : 'http://localhost:8080/loveZimers/getUserLoveZimers/?id=id'  method: GET
 */
router.get("/getUserLoveZimers/:id", (req, res) => {
  users.findOne({ id: req.params.id }).then((user) => {
    let loveZimers = user.loveZimers;
    zimers
      .find({ id: { $in: loveZimers } })
      .project({
        location: 0,
        area: 0,
        beds: 0,
        category: 0,
        imges: 0,
        dates: 0,
        phone: 0,
        comments: 0,
      })
      .toArray()
      .then((zimers) => {
        res.json(zimers).end();
      });
  });
});


/*
add zimer to spesific user love zimers if zimer is already exist return "fals"
Excepted url : 'http://localhost:8080/loveZimers/addToLoveZimmers/?userId=userId'  method: POST
 Excepted body: JSON{
     "loveZimerId":"---",
 }
 */
router.post("/addToLoveZimmers/:userId", (req, res) => {
  users
    .findOne(
      { id: req.params.userId ,
       loveZimers: { $elemMatch:{  $eq: req.body.loveZimerId} } }
    )
    .then((user) => {
        if (user !== null) {
          res.send("false").end();
        } else {
      users
        .updateOne(
          { id: req.params.userId },
          { $push: { loveZimers: req.body.loveZimerId } }
        )
        .then(() => {
          res.send("true");
        });
        }
    });
});


/*
delete zimer frome spesific user love zimers
Excepted url : 'http://localhost:8080/loveZimers/deleteLoveZimers/?id=id'  method: DELETE
 Excepted body: JSON{
     "loveZimer":"---",
 }
 */
router.delete("/deleteLoveZimers/:id", (req, res) => {
  users
    .updateOne(
      { id: req.params.id },
      { $pull: { loveZimers: req.body.loveZimer } }
    )
    .then(() => {
      res.send("ok");
    });
});

module.exports = router;
