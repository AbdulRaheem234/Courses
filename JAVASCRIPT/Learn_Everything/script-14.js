// reduce method iska use big array ko ek number me reduce karna
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let ans = arr2.reduce(function (accumulator, val) {
//   return accumulator + val;
// }, 0);
// find method
// let arr2 = [1, 2, 1, 8, 6, 1, 2, 3, 4, 5];
// let va = arr2.find(function (val) {
//   return val === 1;
// });
// some method ka use tab karte hai ki bhi data me user according number ya score hai ya nhi
// let arr4 = [10, 34, 35, 98, 25, 78];
// let e = arr4.some(function (vl) {
//   return vl > 45;
// });
// every method iska use sab ke number ya score li condition user ke according check karne ke liye use hota hai
let arr8 = [10, 34, 35, 98, 25, 78];
let re = arr8.every(function (vl) {
  return vl > 45;
});
