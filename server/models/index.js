const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripPlanner2', {logging: false});

const Place = db.define('place', {
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  phone: Sequelize.STRING
  // location: Sequelize.ARRAY(Sequelize.FLOAT)
});

const Hotel = db.define('hotel', {
  name: Sequelize.STRING,
  // num_stars: Sequelize.RANGE(Sequelize.FLOAT(1, 5)),
  amenities: Sequelize.TEXT
});

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  cuisine: Sequelize.TEXT
  // price: Sequelize.RANGE(Sequelize.INTEGER)
});

const Activity = db.define('activity', {
  name: Sequelize.STRING
  // age_range: Sequelize.STRING
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {db, Place, Hotel, Restaurant, Activity}
