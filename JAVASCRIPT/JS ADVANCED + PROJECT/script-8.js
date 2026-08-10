function CreateBiscuits(name, price, qty, company, category) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.company = company;
  this.category = this.category;
}
let biscuits1 = new CreateBiscuits("Oreo", 10, 5, "Cadbury", "Chocolate");
console.log(biscuits1);

// koi bhi code js me line by line chalega aur ye natural pattern bhi hota hai ki code line by line chale but kabhi kabar aise cases aate hai life me jha par code wait karta hai utni der me agla code chal jaata hai
console.log("Hey-1");
console.log("Hey-2");
setTimeout(() => {
  console.log("Hey-3");
}, 2000);
console.log("Hey-4");
