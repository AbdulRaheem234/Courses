// from the object below, print the latitude
// what will happen if coordinates is missing? how can you prevent errors?
const locations = {
  city: "Ghaziabad",
  coordinates: {
    lati: 45.45,
    lng: 45.5,
  },
};
console.log(locations?.coordinates?.lati);
// Destructure the city and lat from the location object above
let { city } = locations;
let { lati } = locations.coordinates;
console.log(city, lati);
