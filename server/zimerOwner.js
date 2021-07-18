"use strict";
const express = require("express");
const validation = require("./validation");
let router = express.Router();
let db;
let owners;
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://esty:st322367475@cluster0.ezds5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
  connectionString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);
    db = client.db("Tzimmers");
    owners = db.collection("zimerOwner");
  }
);

/*
check if zimerOwner already in
 Excepted url : 'http://localhost:8080/zimerOwner/isOwnerIn'  method: PUT
 Excepted body: JSON{
     "name":"---",
     "password":---,
     }
 */
router.put("/isOwnerIn", (req, res) => {
  owners
    .findOne({ zimerName: req.body.name, password: req.body.password })
    .then((owner) => {
      if (owner !== null) {
        res.json(owner);
      } else {
        res.json("false");
      }
    });
});


/*
get spesific zimwr owner orders in zimer
Excepted url : 'http://localhost:8080/zimerOwner/getOwnersOrders'  method: PUT
 Excepted body: JSON{
     "zimerName":"---",
 }
 */
router.put("/getOwnersOrders", (req, res) => {
  owners
    .findOne({ zimerName: req.body.name },{projection:{_id:0,id: 0, zimerName: 0, password: 0, validPassword: 0 }})
    .then((orders) => {
      res.json(orders);
    });
});

/*
add new zimerowner, when register userOrder isempty
Excepted url : 'http://localhost:8080/zimerOwner/addZimerOwner'  method: POST
 Excepted body: JSON{
     "id":"---",
     "zimerName":"---",
     "password":---,
     "validPassword":---,
     "userOrder":[{"userName":"--","userId":"--","userEmail":"---","dates":[]},{}...]
 }
 */
router.post("/addZimerOwner", (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const properties = ["id","zimerName","password","validPassword","userOrder"];
  if (!properties.every((property) => property in req.body)) {
    res.status(400).json({
      error:
        " id, zimerName, password, validPassword and  userOrder required",
    });
    console.log("POST", 400, fullUrl);
    return;
  }
  let isValid = validation.isOwnerSigninValuesValid(req.body);
  if (Object.keys(isValid).length !== 0) {
    res.status(400).json(isValid);
  } else {
    owners.insertOne(req.body).then(() => {
      res.status(200).json("ok");
    });
  }
});


/*
add new order to zimer owner
 Excepted url : 'http://localhost:8080/zimerOwner/addOrder'  method: PUT
 Excepted body: JSON{
     "userNmae":"---",
     "userId":---,
     "userEmail":"---@---",
      "dates":[]
 }
 */
router.put("/addOrder", (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const properties = ["userName","userId","userEmail","dates"];
  if (!properties.every((property) => property in req.body)) {
    res.status(400).json({
      error:
        "userName, userId, userEmail and dates required",
    });
    console.log("POST", 400, fullUrl);
    return;
  }
  owners.
    updateOne(
      { zimerName: req.body.zimerName },
      { $addToSet: { userOrder: req.body.newOrder } }
    ).then(() => {
      res.send("ok");
    });
});


/*
get number of zimer owners
 Excepted url : 'http://localhost:8080/zimerOwner/getNumOwners'  method: PUT
 */
router.get('/getNumOwners',(req,res)=>{
    owners.find({}).toArray().then((result)=>{
        res.json(result.length);
    })
})
module.exports = router;
