// Create an array with 3 fruits and print the second fruit
let fruit = ["Apple", "Guava", "Banana"];
fruit[1];
console.log(fruit[1]);

// add "mango" at the end and "pineapple" at the beginning of this array
let fruits = ["Apple", "Banana", "Guava"];
fruits.push("Mango");
fruits.unshift("Pineapple");
console.log(fruits);

// use object.entries() to print al  key-value pairs as
// title: "JAVASCRIPT"
// duration: "4 WEEKS"
const courses = {
  title: "JAVASCRIPT",
  duration: "4 WEEKS",
};
Object.entries(courses).forEach(function (val) {
  console.log(val[0] + ":" + val[1]);
});
