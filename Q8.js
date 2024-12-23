// Creating an array of strings
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Remove the first element from the array using shift()
let removedFruit = fruits.shift();
console.log("Removed fruit: " + removedFruit); // Output: Apple

// Adding a new string to the beginning of the array using unshift()
fruits.unshift("Pineapple");
console.log("Updated array: " + fruits); // Output: ["Pineapple", "Banana", "Orange", "Mango"]
