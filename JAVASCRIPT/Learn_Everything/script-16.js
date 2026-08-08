let obj = {
  name: "Abdul Raheem",
  age: 21,
  city: "Ghaziabad",
  food: "Biryani",
};
const user = {
  name: " Abdul Raheem",
  age: 21,
  address: {
    city: "Ghaziabad",
    pin: 201001,
    location: {
      lat: 646.6,
      lng: 269.3,
    },
  },
};
let { lng, lat } = user.address.location;
console.log(lng, lat);
