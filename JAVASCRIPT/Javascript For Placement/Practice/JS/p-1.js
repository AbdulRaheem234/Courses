function createProduct(name, price, initialStock = 100) {
  let stock = initialStock;
  return {
    name,
    price,
    getStock() {
      return stock;
    },
    buy(qty) {
      if (qty <= 0) {
        return "Enter valid quantity!";
      }
      if (qty <= stock) {
        stock -= qty;
        return `✅ ${qty} ${name} booked.`;
      }
      return `❌ Only ${stock} left.`;
    },
    refill(qty) {
      if (qty <= 0) {
        return "Enter valid quantity!";
      }
      stock += qty;
      return `🔄 ${qty} ${name} added.`;
    },
  };
}
const products = [
  createProduct("iPhone 16", 70000, 50),
  createProduct("KitKat", 10, 200),
];
const container = document.getElementById("products");
products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <h2>${product.name}</h2>
        <p class="price">₹${product.price}</p>
        <p class="stock" id="stock${index}">
            Stock : ${product.getStock()}
        </p>
        <input type="number" id="qty${index}" placeholder="Enter quantity">
        <div class="buttons">
            <button class="buy">Buy</button>
            <button class="refill">Refill</button>
        </div>
        <p class="msg" id="msg${index}"></p>
    `;
  container.appendChild(card);
  const qtyInput = card.querySelector("input");
  const stockText = card.querySelector(".stock");
  const msg = card.querySelector(".msg");
  card.querySelector(".buy").addEventListener("click", () => {
    const qty = Number(qtyInput.value);
    msg.textContent = product.buy(qty);
    stockText.textContent = `Stock : ${product.getStock()}`;
    qtyInput.value = "";
  });
  card.querySelector(".refill").addEventListener("click", () => {
    const qty = Number(qtyInput.value);
    msg.textContent = product.refill(qty);
    stockText.textContent = `Stock : ${product.getStock()}`;
    qtyInput.value = "";
  });
});
