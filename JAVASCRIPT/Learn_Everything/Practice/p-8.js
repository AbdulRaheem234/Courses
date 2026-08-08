// // what is the use of IIFE? Name one real-world use case.
// let shery = (function () {
//   let score = 0;
//   return {
//     getScore: function () {
//       console.log(score);
//     },
//     setScore: function (val) {
//       score = val;
//     },
//   };
// })();
const bank = (function () {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
      } else {
        console.log("Insufficient Balance");
      }
    },

    getBalance() {
      console.log(balance);
    },
  };
})();

bank.getBalance();
bank.deposit(500);
bank.getBalance();

