// Copying objects in spread
let obj9 = {
  name: "Abdul Raheem",
  age: 21,
  email: "abdulrahem20053@gmail.com",
  city: "Ghaziabad",
  food: "Biryani",
};
let obj10 = { ...obj9 };
console.log(obj10);

// Deep clone
let BD = {
  name: " Abdul Raheem",
  age: 21,
  address: {
    city: "Ghaziabad",
    pin: 201001,
  },
};
console.log(BD);
// Wrong method
// let BD2 = { ...BD };
// BD2.address.city = "Delhi";

// stringify karne se user object string ban jata hai original string aur parse karne se asli ban jaata hai
// iska use reference copy se bachne ke liye karte hai
let BD2 = JSON.parse(JSON.stringify(BD));
BD2.address.city = "Delhi";
console.log(BD);
console.log(BD2);
