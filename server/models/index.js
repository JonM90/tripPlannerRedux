const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

let Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false,
    defaultValue: []
  }
});

let Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT(1, 5),
    allowNull: false
  },
  amenities: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

let Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 5,
      min: 1
    }
  }
});

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {db, Place, Hotel, Restaurant, Activity}


// const Place = db.define('place', {
//   address: Sequelize.STRING,
//   city: Sequelize.STRING,
//   state: Sequelize.STRING,
//   phone: Sequelize.STRING,
//   location: Sequelize.ARRAY(Sequelize.FLOAT)
// });

// const Hotel = db.define('hotel', {
//   name: Sequelize.STRING,
//   num_stars: Sequelize.RANGE(Sequelize.FLOAT(1, 5)),
//   amenities: Sequelize.TEXT
// });

// const Restaurant = db.define('restaurant', {
//   name: Sequelize.STRING,
//   cuisine: Sequelize.TEXT,
//   price: Sequelize.RANGE(Sequelize.INTEGER)
// });

// const Activity = db.define('activity', {
//   name: Sequelize.STRING,
//   age_range: Sequelize.STRING
// });

// Hotel.belongsTo(Place);
// Restaurant.belongsTo(Place);
// Activity.belongsTo(Place);

// module.exports = {db, Place, Hotel, Restaurant, Activity}
