// select a link and update its href to point
let a = document.querySelector("a");
a.href = "https://www.google.com";
console.log(a);

// Add a title attribute to a div dynamically
let div = document.querySelector("div");
div.setAttribute("title", "some info");
console.log(div);

// remove the disabled attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");
console.log(btn);
