const db = require("../models");

// Defining methods for the oosController
module.exports = {
    findAll: function (req, res) {
        db.OOS
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.OOS
            .findOne(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.OOS
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.OOS
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    remove: function (req, res) {
        db.OOS
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.deleteOne())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

};