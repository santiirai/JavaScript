// Initialize an empty array to store people
let people = [];

// Add a new person using push()
people.push({ name: "Shanti", age: 20 });
people.push({ name: "Yamuna", age: 19 });
people.push({ name: "Pamela", age: 18 });

console.log("Array after adding people:");
console.log(people); // Output the array after adding people

// Remove the last person using pop()
let removedPerson = people.pop();

console.log("\nArray after removing the last person:");
console.log(people); // Output the array after removing the last person

console.log("\nRemoved person:");
console.log(removedPerson); // Output the removed person
