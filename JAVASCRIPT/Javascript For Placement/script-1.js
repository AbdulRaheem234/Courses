let Bank = (function () {
  let bankBalance = 35000;
  function checkBalance() {
    console.log(`Balance: ₹${bankBalance}`);
  }
  function setBalance(val) {
    bankBalance = val;
    console.log(`New Balance Set: ₹${bankBalance}`);
  }
  function deposit(amount) {
    if (amount > 0) {
      bankBalance += amount;
      console.log(`₹${amount} Deposited`);
      checkBalance();
    }
  }
  function withdraw(amount) {
    if (amount <= 0) {
      console.log("Enter a valid amount!");
    } else if (amount <= bankBalance) {
      bankBalance -= amount;
      console.log(`₹${amount} Withdrawn`);
      checkBalance();
    } else {
      console.log("Insufficient Balance!");
    }
  }
  return {
    check: checkBalance,
    set: setBalance,
    add: deposit,
    draw: withdraw,
  };
})();
Bank.check();
Bank.add(5000);
Bank.draw(12000);
Bank.set(50000);
Bank.check();

// let Bank = (function () {
//   let bankbalance = 35000;
//   function checkBalance() {
//     console.log(bankbalance);
//   }
//   function setBalance(val) {
//     bankbalance = val;
//   }
//   function withdraw(val) {
//     if (val <= bankbalance) {
//       bankbalance -= val;
//       console.log(bankbalance);
//     }
//   }
//   return {
//     check: checkBalance,
//     set: setBalance,
//     draw: withdraw,
//   };
// })();
// Bank.check();
// Bank.withdraw(3400);
// Bank.setBalance(2300);
