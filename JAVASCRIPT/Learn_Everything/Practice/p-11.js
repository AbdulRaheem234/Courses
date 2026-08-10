// Create a pure function to transform a value
function double(val) {
  return val * 2;
}
console.log(double(5));

// access the value of "first-name" from this object
const user1 = {
  "first-name": "Abdul",
};
console.log(user1["first-name"]);

// given a dynamic key let key = "age", how will you access user[key]?
let key = "age";
const user24 = {
  age: 21,
};
console.log(user24[key]);
