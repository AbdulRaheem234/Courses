// convert this normal function into an IIFE
(function init() {
  console.log("Initialized....");
})();

// Destructor this array to get first name and last name
let fullName = ["Abdul", "Raheem"];
let [firstName, lastName] = fullName;
console.log(firstName, lastName);

// merge two arrays using spread operator
let d = [2, 4];
let h = [6, 8];
let u = [...d, ...h];
console.log(u);

// add "India" to the start of this array using spread
let countries = ["USA", "UK", "UAE"];
countries = ["India", ...countries];
console.log(countries);
