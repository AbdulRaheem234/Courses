// create a new list item <li> New Task </li> and add it to the end of a <ul>
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "New Task";
ul.appendChild(li);
console.log(li);

// create a new image element with a placeholder source and add it at the top of a div
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
);
img.classList.add("placeholder");
document.querySelector("div").prepend(img);
console.log(img);
