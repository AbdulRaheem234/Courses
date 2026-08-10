// select a paragraph and replace its content with
// {
//     "<b>Updated</b> by Javascript"
// }
let para = document.querySelector("p");
para.innerHTML = "<b>Updated</b> by Javascript";
console.log(para);

// how do you get the src of an image using javascript
let image = document.querySelector("img");
console.log(image.src);

// what does setAttribute()do
document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRX9drUHaRyEPTCL76rQYrg56dVE5jw-P5tuvsK28bZ55_qf_2koBuENr&s=10",
  );
