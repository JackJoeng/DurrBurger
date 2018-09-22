var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function (data) {
    res.render("index", {burgers: data});
  });
});

router.post("/", function(req, res) {
  console.log(req.body.burgerName);
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burgerName, false],
    function() {
      res.redirect("/");
  });
});

router.put("/", function(req, res) {
  var condition = "id = " + req.body.id;
  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function () {
      res.redirect("/");
    }
  );
});

router.delete("/", function(req, res) {
  var condition = "id = " + req.body.deleteId;
  burger.deleteOne(
    condition,
    function () {
      res.redirect("/");
    }
  );
});

router.get("/uneatall", function(req, res) {
  burger.updateAll(
    {
      devoured: false
    },
    function () {
      res.redirect("/");
    }
  );
});

module.exports = router;
