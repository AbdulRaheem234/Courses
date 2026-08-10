// use IIFE to isolate variables in secret password
(function () {
  const password = "secret password";
  console.log(password);
})();

// rewrite this safely using optional chaining
const person = {};
console.log(person?.profile?.name);

// use a variable to dynamically assign a property
const keys = "role";
let details = {
  name: "Abdul Raheem",
  [keys]: "Admin",
};
console.log(details.role);
