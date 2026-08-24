// lexical scoping -> jisme multiple function hote hai aur inner function apne parent function ke variable ko access kar sakta hai
function ab() {
  let a = 10;
  function cd() {
    let b = 20;
    function ef() {
      let c = 30;
      console.log(a);
      console.log(b);
      console.log(c);
    }
    ef();
  }
  cd();
}
ab();
