function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`you have clicked ${click} times`);
    } else {
      console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
    }
  };
}
let fnc7 = clickLimiter();
fnc7();
fnc7();
fnc7();
fnc7();
fnc7();
fnc7();
