const ul = document.querySelector("ul");
const space = document.createDocumentFragment();
for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  space.appendChild(li);
}
ul.appendChild(space);
