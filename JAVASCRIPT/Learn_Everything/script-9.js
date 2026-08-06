// lexical scoping -> jisme multiple function hote hai aur inner function apne parent function ke variable ko access kar sakta hai
function ab() {
  let a = 10;
  function cd() {
    let b = 20;
    function ef() {
      let c = 30;
    }
  }
}
