let coffee = {
  color: "dark",
  drink: function () {
    console.log("gut gut gut");
  },
};
let nescafeCoffee = Object.create(coffee);
nescafeCoffee.taste = "bitter";
nescafeCoffee.drink();
