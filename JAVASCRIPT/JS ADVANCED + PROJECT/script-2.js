// execution content
function tyiy() {
  var t = 34;
  let y = 84;
  let i = 24;
}

// lexical scoping - li aap kha par physically available ho ye poori tareke se depend karta hai ki aap kya access kr paoge
function iwue() {
  let i = 67;
  function uhof() {
    console.log(i);
  }
}

// dynamic scoping - kha se call kr rahe ho uspe depend karega ki kya value milegi

let a = 12;
function abcd() {
  console.log(a);
}
function defg() {
  let a = 13;
  abcd();
}
defg();
