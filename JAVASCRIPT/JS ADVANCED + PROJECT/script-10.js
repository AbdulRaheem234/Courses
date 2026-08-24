class CreatePencil1 {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  erase() {
    document.querySelectorAll("h1").forEach((el) => {
      if (el.style.color === this.color) {
        el.remove();
      }
    });
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}

let p1 = new CreatePencil1("nataraj", "nataraj", 10, "black");
console.log(p1);
let p2 = new CreatePencil1("apsara", "apsara", 10, "blue");
console.log(p2);
p1.write("Hello from Nataraj");
p2.write("Hello from Apsara");
p1.write("Another black text");
p1.erase();
