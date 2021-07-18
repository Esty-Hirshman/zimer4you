"use strict";
const express = require("express");
const validation = require("./validation");
let router = express.Router();
let nodeGeocoder = require("node-geocoder");
let db;
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
    zimers = db.collection("zimers");
  }
);


/*
 add zimer to  system. 
 Excepted url : 'http://localhost:8080/zimers/addZimer'  method: POST
 Excepted body: JSON{
     "name": "---",
     "id":"----",
     "price":"--@---"
     "location": ---,
     "area": password
     "beds":---,
     "category":[...],
     "img":"---",
     "imges":[img1,img2,img3,img4,img5],
     "phone":"---"
 }
 */
router.post("/addZimer", async (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const properties = ["id","name","price","location","area","beds","category","img","imges","phone"];
  if (!properties.every((property) => property in req.body)) {
    res.status(400).json({
      error:
        "name, id, price, location, area, beds,category,img,imges and phone required",
    });
    console.log("POST", 400, fullUrl);
    return;
  }
  let isValid = validation.isAddZimerValuesValid(req.body);
  if (Object.keys(isValid).length !== 0) {
    res.status(400).json(isValid);
  } else {
    zimers.insertOne({ ...req.body, dates: [], comments: [] }).then(() => {
      res.status(200).json("ok").end();
    });
  }
});


/*
get all zimers without imd,imges,dates,phone and comments
 Excepted url : 'http://localhost:8080/zimers/getZimers'  method: GET
 */
router.get("/getZimers", (req, res) => {
  zimers
    .find()
    .project({img:0, imges: 0, dates: 0, phone: 0, comments: 0 })
    .toArray()
    .then((result) => {
      res.json(result);
    });
});

/*
get all zimers img
 Excepted url : 'http://localhost:8080/zimers/getZimersImges'  method: GET
 */
router.get("/getZimersImges",(req,res)=>{
  zimers.find().project({id:0,name:0,price:0,location:0,area:0,beds:0,category:0,imges:0,dates:0,phone:0,comments:0}).toArray().then((result)=>{
    res.json(result)
  })
})

/*
get number of zimers in system
 Excepted url : 'http://localhost:8080/zimers/getNumZimers'  method: GET
 */
router.get("/getNumZimers", (req, res) => {
  zimers
    .find({})
    .toArray()
    .then((zimers) => {
      res.json(zimers.length);
    });
});

/*
get spesific zimer by id in params without dates,img,imges
 Excepted url : 'http://localhost:8080/zimers/getZimerById/?zimerId=zimerId'  method: GET
 */
router.get("/getZimerById/:zimerId", (req, res) => {
  zimers
    .findOne({ id: req.params.zimerId }, { projection: { dates: 0, imges:0, img:0 } })
    .then((zimer) => {     //get zimer latitude and lomgitude
      let response = {};
      let options = {
        provider: "google",
        apiKey: "AIzaSyC52R7VHe5-Etup41G8odeCv0Qr-3wyqcA",
      };
      let geoCoder = nodeGeocoder(options);
      geoCoder.geocode(zimer.location).then((res1) => {
        response = {
          ...zimer,
          latitude: res1[0].latitude,
          longitude: res1[0].longitude,
        };
        res.status(200).json(response);
      });
    });
});

/*
get spesific zimes imagesr by id in params 
 Excepted url : 'http://localhost:8080/zimers/getZimerImgesById/?zimerId=zimerId'  method: GET
 */
router.get("/getZimerImgesById/:zimerId",(req,res)=>{
  zimers.findOne({id:req.params.zimerId},
    {projection:{id:0,name:0,price:0,location:0,area:0,beds:0,category:0,dates:0,phone:0,comments:0}})
    .then((result)=>{
    res.status(200).json(result)
  })
})

/*
update spesific zimer
 Excepted url : 'http://localhost:8080/zimers/updateZimer/?zimerId=zimerId'  method: PUT
 Excepted body: JSON{
     ---details to update--
 }
 */
router.put("/updateZimer/:zimerId", (req, res) => {
  zimers.updateOne({ id: req.params.zimerId }, { $set: req.body }).then(() => {
    res.send("ok");
  });
});


/*
add comment to spesific zimer
 Excepted url : 'http://localhost:8080/zimers/addComment/?zimerId=zimerId'  method: PUT
 */
router.put("/addComment/:zimerId", (req, res) => {
  zimers
    .updateOne(
      { id: req.params.zimerId },
      { $addToSet: { comments: req.body.comment } }
    )
    .then(() => {
      res.send("ok");
    });
});

/*
add date to spesific zimer
 Excepted url : 'http://localhost:8080/zimers/addDate/?zimerId=zimerId'  method: PUT
 */
router.put("/addDate/:zimerId", (req, res) => {
  zimers
    .updateOne(
      { id: req.params.zimerId },
      { $addToSet: { dates: req.body.date } }
    )
    .then(() => {
      res.send("ok");
    });
});

/*
check if date is already caught in spesific zimer
 Excepted url : 'http://localhost:8080/zimers/isDataChoosed/?zimerId=zimerId'  method: PUT
 */
router.put("/isDataChoosed/:zimerId", (req, res) => {
  zimers
    .findOne({ id: req.params.zimerId, dates: req.body.date })
    .then((result) => {
      if (result !== null) {
        res.send("date is not empty");
      } else {
        res.send("ok");
      }
    });
});

router.delete("/delete",(req,res)=>{
  zimers.deleteOne({id:"25"}).then(()=>{res.send("ok")})
})

module.exports = router;
