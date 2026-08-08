// first step
// let array = [1, 2, 3, 4, 5, 6];
// push method
// array.push(100);
// pop method
// array.pop();
// shift method first element ko delete karta hai
// array.shift();
// unshift method suru me element insert karta hai
// array.unshift(78);
// splice method me two indexing hoti hai pahla jo hai uska matlab yeah hai ki kha se hatani hai aur dusra kitni value hatani hai
// array.splice(2, 1);
// slice method new array me element copy karke deta hai
// let slicedArray = array.slice(0, 4);
// reverse method
// array.reverse();
// second step
// sort method hamesha ek function except karta hai jisme aapko two values leni hoti hai aur new array me milega aur agar subtraction a-b return kiya toh ascending order me array milega aur b-a toh descending order me milega
let array1 = [67, 243, 46, 43, 98];
let sortedArray = array1.sort(function (a, b) {
  //   return a - b;
  return b - a;
});
