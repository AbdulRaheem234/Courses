// Write a discount calculator
function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}
let discounter = discountCalculator(10);
console.log(discounter(200));

// can an object key be a number or boolean? try this
const obj67 = {
  true: "yes",
  43: "answer",
};
console.log(obj67[43]);
console.log(obj67[true]);
