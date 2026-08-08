// Optional chaining me ? Question mark ka use kara jaata hai error ko hataane ke liye ya phir exception
let obj4 = {
  name: " Abdul Raheem",
  age: 21,
  addresses: {
    city: "Ghaziabad",
    pin: 201001,
  },
};
console.log(obj4?.address?.city);
// Computed Properties koi bhi variable apni value ko put kar sake is liye use hota hai

let role = "admin";

let obj23 = {
  name: " Abdul Raheem",
  age: 21,
  addresses: {
    city: "Ghaziabad",
    pin: 201001,
  },
  [role]: "Abdul Raheem",
};
console.log(obj23);
