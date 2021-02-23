const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("you hit find all");
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function(req, res) {
    db.User.findById(req.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
      console.log("user from user controller", user);
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // updatePoints: function(req, res) {
  //   db.User.findByIdAndUpdate(id, { points: req.points }, req.body)(
  //     { _id: req.params.id },
  //     { $set:
  //        {
  //          points: 500,
  //        }
  //     }
  //  )
  // },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
