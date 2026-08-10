let btn = document.querySelector("#btn");

let fileinp = document.querySelector("#fileinp");
btn.addEventListener("click", function () {
  fileinp.click();
});
fileinp.addEventListener("change", function (dets) {
  const file = dets.target.files[0];
  if (dets.target.files) {
    btn.textContent = file.name;
  }
});
