greet();
function greet() {
  console.log("Hello, World!");
}

// replace "Banana" with "kiwi" in the array above
let fru = ["Apple", "Banana", "Guava"];
fru[1] = "Kiwi";
console.log(fru);

// insert "Red" and "Blue" at index-1 in this array
let colors = ["Black", "Green", "White", "Yellow", "Orange"];
colors.splice(1, 0, "Red", "Blue");
console.log(colors);

// extract only the middle 3 elements from this array
let items = ["item1", "item2", "item3", "item4", "item5"];
let middle = items.slice(1, 4);
console.log(middle);
