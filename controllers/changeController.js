const db = require("../models");

module.exports = {
  create: function(req, res) {
      
    db.Change.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  //   ,
  //   findAll: function(req, res) {
  //     db.Change.find()
  //       .$where(function() {
  //         return this.user === req.body.user && this.date === req.body.date;
  //       })
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   deleteOne: function(req, res) {
  //     db.Change.deleteOne({
  //       user: req.body.user,
  //       date: req.body.date,
  //       id: req.params.id
  //     })
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};