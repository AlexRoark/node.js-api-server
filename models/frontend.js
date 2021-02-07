const db = require("../database");
const ObjectID = require("mongodb").ObjectID;

exports.all = (cb) => {
  db.get()
    .collection("junoteapi")
    .find()
    .toArray((err, docs) => {
      cb(err, docs);
    });
};

exports.findById = (id, cb) => {
  db.get()
    .collection("junoteapi")
    .findOne({ _id: ObjectID(id) }, (err, doc) => {
      cb(err, doc);
    });
};

exports.create = (stack, cb) => {
  db.get()
    .collection("junoteapi")
    .insert(stack, (err, result) => {
      cb(err, result);
    });
};

exports.update = (id, newData, cb) => {
  db.get()
    .collection("junoteapi")
    .updateOne({ _id: ObjectID(id) },{$set: newData}, (err, result) => {
      cb(err, result);
    });
};

exports.delete = (id, cb) => {
  db.get()
    .collection("junoteapi")
    .deleteOne({ _id: ObjectID(id) }, (err, result) => {
      cb(err, result);
    });
};
