var express = require("express"),
  app = express(),
  port = 8080;
const bodyParser = require("body-parser");
const db = require("./database");
const MongoClient = require("mongodb").MongoClient;
const dburi =
  "mongodb+srv://alex_roark:l89P5XO0G24uLV2b@cluster0.rwwit.mongodb.net/nodejs?retryWrites=true&w=majority"; // Not a personal DB, created for test
const ObjectID = require("mongodb").ObjectID;
const frontendController = require("./controllers/frontend");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Junote");
});

app.get("/frontend", frontendController.all);

app.get("/frontend/:id", frontendController.findById);

app.post("/frontend", frontendController.create);

app.put("/frontend/:id", frontendController.update);

app.delete("/frontend/:id", frontendController.delete);

db.connect(dburi, (err) => {
  if (err) {
    return console.log(err);
  }
  app.listen(port, () => {
    console.log("APP is running");
  });
});
