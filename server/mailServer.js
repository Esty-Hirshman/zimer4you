var nodemailer = require("nodemailer");

/*sent email to user when register */
exports.emailSignIn = function (userEmail, name, subject, massage) {
  var transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
      user: "zimerforyou@gmail.com",
      pass: "st322367475",
    },
  });

  var mailOptions = {
    from: "zimerforyou@gmail.com",
    to: userEmail,
    subject: subject,
    text:
      "שלום " +
      name +
      ", " +
      massage +
      "\nבברכה צוות zimer4you\n\n\nמייל זה נשלח מהאתר של אסתי הירשמן 322367475 סמינר ישן",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("sent signIn email!");
    }
  });
};

/*sent email to user when change password */
exports.emailChangePassword = function (userEmail, subject, password) {
  var transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
      user: "zimerforyou@gmail.com",
      pass: "st322367475",
    },
  });

  var mailOptions = {
    from: "zimerforyou@gmail.com",
    to: userEmail,
    subject: subject,
    text:
      "שינית סיסמא בהצלחה!\nסיסמתך החדשה היא: " +
      password +
      "\nתוכל לשנות אותה באזור האישי",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("sent change password email!");
    }
  });
};

/*sent email to user when user contacts */
exports.contactByEmail = function (mail, name, zimer) {
  var transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
      user: "zimerforyou@gmail.com",
      pass: "st322367475",
    },
  });

  var mailOptions = {
    from: "zimerforyou@gmail.com",
    to: mail,
    subject: "יצירת קשר עם צימר " + zimer,
    text:
      "שלום " +
      name +
      ",\nאנו שמחים שאתה מתענין בצימר שלנו,\nבכדי לשמור לך תאריכים בחר באפשרות 'בחירת תאריכים' באתר ושמור אותם. \nנשמח לראות אותך אצלינו\n תוכל להשיב למייל זה כדי לתקשר איתנו ולשאול שאלות\nלהתראות,\n" +
      zimer +
      "\n\n\nמייל זה נשלח מהאתר של אסתי הירשמן 322367475 סמינר ישן",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("sent user contacts email!");
    }
  });
};
