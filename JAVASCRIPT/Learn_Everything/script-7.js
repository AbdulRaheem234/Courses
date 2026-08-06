// global value ko change kar de pure  function aur jo global value ko change nhi kare vo impure function...
let b = 34;
// Pure function
function r() {
  console.log("Hello World!....");
}
function r1() {
  b++;
}
r();
r1();
console.log(b);
