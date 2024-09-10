// Write a javascript program to create an array of strings and use the filter()
// method to filter out strings that start with the letter
//     &#39; A &#39;. Print the filtered array.
const fruits = ["Mango", "Banana", "Apple", "Melon", "Orange", "Grapes"];

const filteredFruits = fruits.filter(function (fruit) {
    return fruit[0] == 'M';
});

console.log(filteredFruits);
