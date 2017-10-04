const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const db = require('./models').db;

const routes = require('./routes')


app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '..', 'public')));

console.log('from app')
app.use('/', routes);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send('Something went wrong: ' + err.message);
});


db.sync()
  .then(function() {
    console.log('Synchronated the database');
    app.listen(3000, function() {
      console.log('The server is listening closely on port', 3000);
    });
  })
  .catch(function(err) {
    console.error('Trouble right here in River City', err, err.stack);
  });

module.exports = app;
