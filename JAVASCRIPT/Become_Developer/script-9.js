let main = document.querySelector("#main");
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  let card = document.createElement("div");
  card.classList.add("card");
  let profile = document.createElement("div");
  profile.classList.add("profile");
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  );
  let h3 = document.createElement("h3");
  h3.innerText = "Human";
  let h5 = document.createElement("h5");
  h5.textContent = "Web Developer";
  let p = document.createElement("p");
  p.textContent = "He is a web designer";

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);
  main.appendChild(card);
});
