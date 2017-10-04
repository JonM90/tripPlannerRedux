const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoibW5ta3QiLCJhIjoiY2o4YnFvejE0MDB1aDJxcDcxaW1hbXppNiJ9.sWe9VtYqQYYIpZwvaZHxAg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);

// const Sequelize = require('sequelize')
// const db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

// let Place = db.define('place', {
//   address: {
//     type: Sequelize.STRING
//   },
//   city: {
//     type: Sequelize.STRING
//   },
//   state: {
//     type: Sequelize.STRING
//   },
//   phone: {
//     type: Sequelize.STRING
//   },
//   location: {
//     type: Sequelize.ARRAY(Sequelize.FLOAT)
//   }
// });

// let Hotel = db.define('hotel', {
//   name: {
//     type: Sequelize.STRING
//   },
//   num_stars: {
//     type: Sequelize.RANGE(Sequelize.FLOAT(1, 5)),
//   },
//   amenities: {
//     type: Sequelize.TEXT
//   }
// });

// let Restaurant = db.define('restaurant', {
//   name: {
//     type: Sequelize.STRING
//   },
//   cuisine: {
//     type: Sequelize.TEXT
//   },
//   price: {
//     type: Sequelize.RANGE(Sequelize.INTEGER)
//   }
// });

// const Activity = db.define('activity', {
//   name: {
//     type: Sequelize.STRING
//   },
//   age_range: {
//     type: Sequelize.STRING
//   }
// });

// Hotel.belongsTo(Place);
// Restaurant.belongsTo(Place);
// Activity.belongsTo(Place);

// module.exports = {db, Place, Hotel, Restaurant, Activity}

// var {db} = require("./models");
// var {Place} = require("./models");
// var {Hotel} = require("./models");
// var {Restaurant} = require("./models");
// var {Activity} = require("./models");
