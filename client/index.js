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


fetch('/api')
.then(result => result.json())
.then(data => {
  console.log('data:', data);

  ['hotels', 'restaurants', 'activities'].forEach(events => {
    data[events].forEach(event => {
      console.log('event:', event.name)
      let option = document.createElement('option');
      option.innerHTML = event.name;
      document.getElementById(`${events}-choices`).appendChild(option);
    })
  })

})
.catch(console.error);
