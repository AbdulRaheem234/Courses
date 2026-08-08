// use rest parameter to accept any number of scores and return the total
function getScore(...scores) {
  let total = 0;
  scores.forEach(function (score) {
    total = total + score;
  });
  return total;
}
console.log(getScore(10, 20, 30, 40, 50));
