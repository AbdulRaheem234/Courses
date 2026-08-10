// kya log karega
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();

// use .every() to check if all numbers are even
let arry = [2, 4, 6, 8];
let an = arry.every(function (val) {
  return val % 2 === 0;
});
console.log(an);
