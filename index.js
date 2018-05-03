const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const logger = require("morgan");
const SuperLogin = require("superlogin");
const dotenv = require("dotenv").config();
const cors = require("cors");
const SLConfig = require("./config/sl-config.js");
const port = process.env.PORT || 5000;
const superlogin = new SuperLogin(SLConfig);

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.use(cors({ origin: ["http://localhost:3000"] }));

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

// Mount SuperLogin's routes to our app
app.use("/auth", superlogin.router);

superlogin.onCreate(function(userDoc, provider) {
  //   console.log("created", userDoc);
  //   if (userDoc === undefined) {
  //     userDoc = {};
  //   }
  //   if (provider !== "local") {
  //     return (provider = "");
  //   }
  //   const nano = require("nano")(
  //     `http://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5984`
  //   );
  //   Promise.resolve(userDoc).then(userDoc => {
  //     const userDB = nano.db.use(Object.keys(userDoc.personalDBs)[0]);
  //     const userMetdata = {
  //       _id: "metadata",
  //       firstName: userDoc.firstName,
  //       lastName: userDoc.lastName,
  //       company: userDoc.company ? userDoc.company : "",
  //       email: userDoc.email, // userDoc.unverifiedEmail.email
  //       username: userDoc._id,
  //       signUpDate: userDoc.signUp.timestamp,
  //       personalDBs: Object.keys(userDoc.personalDBs)
  //     };
  //     userDB.bulk({ docs: [userMetdata] }, function(
  //       err,
  //       body,
  //       header
  //     ) {
  //       if (err) {
  //         console.log("superlogin.onCreate error: ", err.message);
  //         return;
  //       }
  //       console.log("You have inserted the metadata. Body response:");
  //       console.log(body);
  //       console.log("\n and headers: ", header);
  //     });
  //   });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
