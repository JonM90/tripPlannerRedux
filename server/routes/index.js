const express = require('express');
const router = express.Router();

const Promise = require("bluebird");
const {db} = require("../models");
const {Place} = require("../models");
const {Hotel} = require("../models");
const {Restaurant} = require("../models");
const {Activity} = require("../models");


// router.get('/api', function(req, res, next) {
//   // Place.findAll()
//   // .then(function(places) {
//   //   res.json(places);
//   // })
//   // .catch(next)
//   console.log('GREETINGS!!!');

//   var allAttractions = {};

//   Hotel.findAll({
//     // include: [Place]
//     include: [{all: true}]
//   })
//   .then(function(hotels) {
//     allAttractions.hotels = hotels;
//     return Restaurant.findAll();
//   })
//   .then(function(restaurants) {
//     allAttractions.restaurants = restaurants;
//     return Activity.findAll();
//   })
//   .then(function(activities) {
//     allAttractions.activities = activities;
//   })
//   .then(function() {
//     console.log(JSON.stringify(allAttractions));
//     res.json(allAttractions);
//   })
//   .catch(next);


// })


router.get('/api', function(req, res, next) {

  console.log('GREETINGS AGAIN!!!');

    var allAttractions = {};

    Hotel.findAll({
      // include: [Place]
      include: [{all: true}]
    })
    .then(function(hotels) {
      allAttractions.hotels = hotels;
      return Restaurant.findAll();
    })
    .then(function(restaurants) {
      allAttractions.restaurants = restaurants;
      return Activity.findAll();
    })
    .then(function(activities) {
      allAttractions.activities = activities;
    })
    .then(function() {
      // Promise.all(allAttractions);
      console.log(JSON.stringify(allAttractions));
      console.log(typeof allAttractions);
      res.send(allAttractions);
    })
    .catch(next);


})

module.exports = router;
