const fruits = ["Mango", "Apple", "Banana", "Papaya", "Guava"]//creating array

//console.log(fruits)
console.log(fruits.toString())//seperated by the comma
console.log(fruits.pop())//remove the last element
console.log(fruits.toString())//shows the result after removind element //push element from the last
fruits.push("Pineapple")
console.log(fruits.toString())

//shift-->push ele in first
fruits.shift()
console.log(fruits)
fruits.unshift("Kiwi")
console.log(fruits.toString())

//slice
const citrus = fruits.slice(1,3)// last index is exclusive
console.log(citrus)

//splice
const splice = fruits.splice(2,2 ,"Lemon")//
console.log(splice)