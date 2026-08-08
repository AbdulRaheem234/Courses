// foreach method har line ko print karega
// let arr = [56, 67, 83, 367, 38];
// arr.forEach(function (element) {
//   console.log(element + 5);
// });
// map function ka use tab karna hai jab ek naya array banana hai pichle array ke data basis par
// let arr = [11, 4, 5, 9, 25];
// let map = arr.map(function (element) {
//   return element + 10;
// });
// filter method ka use tab karte hai jab hame new array me kuch data hi chahiye jaise ki jinke number 4 se bade hai ya kuch bhi other reson jaise
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newAr = ar.filter(function (element) {
  if (element > 4) return true;
});
