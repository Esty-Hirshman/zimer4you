"use strict";
const express = require("express");
const validation = require("./validation");
let sendEmail = require("./mailServer");
let router = express.Router();
let db;
let users;
const MongoClient = require("mongodb").MongoClient;
const { ReplSet } = require("mongodb");
const connectionString =
  "mongodb+srv://esty:st322367475@cluster0.ezds5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
  connectionString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);
    db = client.db("Tzimmers");
    users = db.collection("users");
  }
);


/*
 register to  system. 
 Excepted url : 'http://localhost:8080/users/signIn'  method: POST
 Excepted body: JSON{
     "name": "---",
     "id":"----",
     "email":"--@---"
     "password": ---,
     "validPassword": password
     "loveZimers":[...]
 }
 send email to user when register
 */
router.post("/signIn", async (req, res) => {
  let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const properties = ["name","id","email","password","validPassword","loveZimers"];
  if (!properties.every((property) => property in req.body)) {
    res.status(400).json({
      error:
        "name, id, email, password, validPassword and  loveZimers required",
    });
    console.log("POST", 400, fullUrl);
    return;
  }
  let isValid = await validation.isSigninValuesValid(req.body);
  if (Object.keys(isValid).length !== 0) {
    res.json(isValid);
  } else {
    users.insertOne(req.body).then(() => {
      sendEmail.emailSignIn(
        req.body.email,
        req.body.name,
        "נרשמת בהצלחה ל zimer4you‏",
        "אנו מודים לך שנרשמת ל zimer4you ומקווים שתהנה מהשימוש באתר!"
      );
      res.json("ok");
    });
  }
});

/*
 login to system. 
 Excepted url : 'http://localhost:8080/users/login'  method: PUT
 Excepted body: JSON{
     "email":"--@---"
     "password": ---
 }
 */
router.put("/login", async (req, res) => {
  let isValid = await validation.isLoginValuesValid(req.body);
  if (Object.keys(isValid).length !== 0) {
    res.json(isValid);
  } else {
    users
      .findOne({ email: req.body.email, password: req.body.password })
      .then((user) => {
        if (user !== null) {
          res.json(user);
        } else {
          res.json("false");
        }
      });
  }
});

/*
 change password in data. 
 Excepted url : 'http://localhost:8080/users/changePassword'  method: PUT
 Excepted body: JSON{
     "email":"---",
     "oldPassword":---,
     "newPassword":---
 }
 send email to user when password changed
 */
router.put("/changePassword", (req, res) => {
  users.findOne({ email: req.body.email }).then((result) => {
    if (result === null) {
      res.send("not registered").end();
      return;
    }
  });
  users
    .updateOne(
      { email: req.body.email, password: req.body.oldPassword },
      {
        $set: {
          password: req.body.newPassword,
          validPassword: req.body.newPassword,
        },
      }
    )
    .then(() => {
      sendEmail.emailChangePassword(
        req.body.email,
        "שינוי סיסמא",
        req.body.newPassword
      );
      res.send("ok");
    });
});

/*
check if user is already in. 
 Excepted url : 'http://localhost:8080/users/isNewUser/?id=id'  method: GET
 */
router.get("/isNewUser/:id", (req, res) => {
  users.findOne({ id: req.params.id }).then((result) => {
    if (result !== null) {
      res.send("false").end();
    } else {
      res.send("true");
    }
  });
});


/*
sent email to user when contant 
 Excepted url : 'http://localhost:8080/users/contactByEmail'  method: PUT
 Excepted body: JSON{
     "email":"--@--",
     "name":"---",
     "zimer":"zimerName"
 }
 */
router.put("/contactByEmail", (req, res) => {
  sendEmail.contactByEmail(req.body.email, req.body.name, req.body.zimer);
});

/*
check contant values validation 
 Excepted url : 'http://localhost:8080/users/contacValidation'  method: PUT
 Excepted body: JSON{
      "name":"---",
     "email":"--@--",
     "phone":"---",
     "address":"---"
 }
 */
router.put("/contacValidation", (req, res) => {
  let isValid = validation.isContactValuesValid(req.body);
  if (Object.keys(isValid).length !== 0) {
    res.json(isValid);
  } else {
    res.json("ok");
  }
});

module.exports = router;
