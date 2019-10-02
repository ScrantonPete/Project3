const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Change.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
      console.log("req.body.user", (req.params))
    db.Change.find(
      {
        user: req.body.user,
        date: req.body.date
      },
      function(err, found) {
        // Log any errors if the server encounters one
        if (err) {
          console.log(err);
        }
        // Otherwise, send the result of this query to the browser
        else {
          res.json(found);
        }
      }
    );
  }
};

//   ,
//   deleteOne: function(req, res) {
//     db.Change.deleteOne({
//       user: req.body.user,
//       date: req.body.date,
//       id: req.params.id
//     })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
