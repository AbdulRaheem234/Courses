// hame seekhna hai factories banana matlab ki aap ek baar blueprint bana do ki har object kaisa dikhega and hum log naye objects with different values bana payenge yahi upar upar se poora kaam hai OOPs me
function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.append(h1);
  };
}
let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
console.log(pencil1);
let pencil2 = new CreatePencil("Doms", 10, "white", "doms");
console.log(pencil2);
