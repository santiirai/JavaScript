//write a js program to create an array of string and use map() to create a new array
//where each string is capitalized. Print the new array.

const string = ['apple', 'ant', 'banana', 'ball'];

const capitalizedArray = string.map(capitalize);
// Function to capitalize the first letter of each string
function capitalize(str) {
    newArray = str.charAt(0).toUpperCase() + str.slice(1);
    return newArray;
}

console.log(capitalizedArray);
