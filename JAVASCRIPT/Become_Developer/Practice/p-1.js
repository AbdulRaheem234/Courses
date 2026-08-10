// use querySelectorAll to select all buttons with class".buy-now
let buttons = document.querySelectorAll(".buy-now");
console.log(buttons);

// select the heading of a page by ID and change its text "Welcome"
let heading = document.querySelector("#heading");
heading.textContent = "Welcome";
console.log(heading);

// select all <li> elements and print their text using a loop
let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].textContent);
}
