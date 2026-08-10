// use rest parameter to accept any number of scores and return the total
function getScore(...scores) {
  let total = 0;
  scores.forEach(function (score) {
    total = total + score;
  });
  return total;
}
console.log(getScore(10, 20, 30, 40, 50));

// use .filter() to keep numbers greater than 10
let arr1 = [13, 20, 37, 45, 59];
let newArr1 = arr1.filter(function (val) {
  return val > 10;
});
console.log(newArr1);
