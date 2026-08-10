// whats the return of the function?
function f() {
  return;
}
console.log(f());

// use .find() to get the first number less than 10
let arra = [12, 34, 56, 78, 43];
let ans = arra.find(function (val) {
  return val < 20;
});
console.log(ans);

// use .some() to check if any student has scored below 35
let arra1 = [34, 56, 78, 43];
let ans1 = arra1.some(function (val) {
  return val < 35;
});
console.log(ans1);
