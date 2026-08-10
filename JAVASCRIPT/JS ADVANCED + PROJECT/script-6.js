// global scope
console.log(this);
// function ke andar
function rtyd() {
  console.log(this);
}
rtyd();

// method ke andar
let objec = {
  name: "Abdul Raheem",
  age: 22,
  sayName: function () {
    console.log(this.age);
  },
};
// objec.sayName();

// event handler
document.querySelector("h1").addEventListener("click", function () {
  //   alert();
  console.log((this.style.color = "red"));
});

// class ke andar
// step-1
// class Abcd {
//   constructor() {
//     console.log("HI!");
//     this.a = 13;
//   }
// }
// new Abcd();

// step-2
let obj58 = {
  name: "Abdul Raheem",
  age: 21,
  sayName: () => {},
};
obj58.sayName();
