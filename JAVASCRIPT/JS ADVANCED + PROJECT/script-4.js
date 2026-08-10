function countForMe() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  };
}
let fnc2 = countForMe();
fnc2();
fnc2();
fnc2();

let fnc3 = countForMe();
fnc3();
fnc3();
fnc3();
fnc3();
fnc3();
fnc3();
