let nm = document.querySelector("#name");
let form = document.querySelector("form");
form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  const regex = /^[a-zA-Z0-9_]{3,20}$/;
  let ans = regex.test(nm.value);
  console.log();
});
