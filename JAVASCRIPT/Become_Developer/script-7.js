// change event tab chalta hai jab aapka koi input select ya textarea me koi change ho jaye
let sel = document.querySelector("select");
let device = document.querySelector("#device");
sel.addEventListener("change", function (dets) {
  device.textContent = `${dets.target.value} Device Selected`;
});
