var express = require("express");

var router = express.Router();
var db = require("../models");

// console.log(db.burgers);
// console.log(db.Burger);


router.get("/", function (req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

router.get("/api/burgers", function (req, res) {
  db.burgers.findAll({})
    .then(function (burgerData) {
      res.json(burgerData);
    });
});

// // post route
router.post("/api/burgers", function (req, res) {
  console.log("Req.body" + req.body);
  db.burgers.create({
    burger_name: req.body.burger_name,
    devoured: false
  })
    .then(function (burgerData) {
      res.json(burgerData);
    });
});

// put route
router.put("/api/burgers/:id", function (req, res) {
  db.burgers.update({
    devoured: true
  }, {
      where: {
        id: req.params.id
      }
    })
    .then(function (burgerData) {
      res.json(burgerData);
    });
});

module.exports = router;
