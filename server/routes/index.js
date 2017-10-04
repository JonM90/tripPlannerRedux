const express = require('express');
const router = express.Router();

const Promise = require("bluebird");
const {db} = require("../models");
const {Place} = require("../models");
const {Hotel} = require("../models");
const {Restaurant} = require("../models");
const {Activity} = require("../models");


router.get('/', function(req, res, next) {
  Place.findAll()
  .then(function(p) {
    console.log('GREETINGS!!!', p)
    res.json(p);
  })
})

module.exports = router;
