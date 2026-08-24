// // factory function pattern
// function createProduct(name, price) {
//   let stock = 100;
//   return {
//     name,
//     price,
//     checkStock() {
//       console.log(stock);
//     },
//     buy(qty) {
//       if (qty <= stock) {
//         stock -= qty;
//         console.log(`${qty} pieces booked - ${stock} pieces left.`);
//       } else {
//         console.log(`We only have ${stock} pieces left.`);
//       }
//     },
//     refill(qty) {
//       stock += qty;
//       console.log(`refilled the stock - ${stock} pieces now.`);
//     },
//   };
// }
// let iphone = createProduct("iphone", 70000);
// iphone.buy(5);
// let kitkat = createProduct("kitkat", 10);
// kitkat.buy(5);

// Second
// Factory Function Pattern
// Factory Function Pattern
function createProduct(name, price, initialStock = 100) {
  let stock = initialStock;
  return {
    name,
    price,
    details() {
      console.log(`Product : ${name}`);
      console.log(`Price   : ₹${price}`);
      console.log(`Stock   : ${stock}`);
    },
    checkStock() {
      console.log(`Available Stock: ${stock}`);
    },
    buy(qty) {
      if (qty <= 0) {
        console.log("Enter a valid quantity!");
      } else if (qty <= stock) {
        stock -= qty;
        console.log(`✅ ${qty} ${name} booked.`);
        console.log(`Stock Left: ${stock}`);
      } else {
        console.log(`❌ Only ${stock} ${name} left.`);
      }
    },
    refill(qty) {
      if (qty > 0) {
        stock += qty;
        console.log(`🔄 Added ${qty} ${name}.`);
        console.log(`New Stock: ${stock}`);
      }
    },
  };
}
let iphone = createProduct("iPhone 16", 70000, 50);
let kitkat = createProduct("KitKat", 10, 200);
iphone.details();
iphone.buy(5);
iphone.refill(10);
iphone.checkStock();
console.log("------------------");
kitkat.details();
kitkat.buy(20);
kitkat.checkStock();
