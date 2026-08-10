// call apply bind
// function ko call karte time set kar sakte hai ki uskij this ki value kya hogi
let deta = {
  name: "Harsh",
  age: 21,
};
function fgyu(a, b, c) {
  console.log(this, a, b, c);
}
// fgyu.call(deta, 1, 2, 3);
// fgyu.apply(deta, [1, 2, 3]);
let fnc45 = fgyu.bind(deta, 1, 2, 3);
fnc45();
