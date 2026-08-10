// fix the function only return
function checkAge(age) {
  if (age < 18) return "Too Young...";
  return "Allowed";
}
console.log(checkAge(20));

// use .reduce() to find the sum of this array
let arr87 = [10, 20, 30];
let sum = arr87.reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log(sum);
