const Frontend = require("../models/frontend");

exports.all = (req, res) => {
  Frontend.all((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

exports.findById = (req, res) => {
  Frontend.findById(req.params.id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

exports.create = (req, res) => {
  var festack = {
    name: req.body.name,
  };
  Frontend.create(festack, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(festack);
  });
};

exports.update = (req, res) => {
  Frontend.update(req.params.id, { name: req.body.name }, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

exports.delete = (req, res) => {
  Frontend.delete(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
