// select the first item in a list and delete it from the DOM
let ul = document.querySelector("ul");
let li = document.querySelector("li");
ul.removeChild(li);
console.log(li);

// Add a highlight class to every even item in a list
let lis = document.querySelectorAll("li");
lis.forEach(function (ele) {
  ele.classList.add("highlight");
});

// set the font size of all <p> elements to 18px using .style
let p = document.querySelectorAll("p");
p.forEach(function (elem) {
  elem.style.fontSize = "18px";
});
