// copy this operator using spread operator
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy);

// destructure the key "first-name1" as a variable called firstName1
const user678 = {
  "first-name1": "Abdul",
};
let { "first-name1": firstName1 } = user678;
console.log(firstName1);

// use for-in to log all keys in this object
const course = {
  title: "JAVASCRIPT",
  duration: "4 WEEKS",
};
for (let key in course) {
  console.log(key);
}
