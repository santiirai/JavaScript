//Using splice to Modify Array: Create an array with the following elements: ["apple", "banana",
//"cherry", "date", "elderberry"]. Use the splice method to remove the element "cherry" and add"fig" and "grape" in its place. Display the modified array.console.log("Qs. 1")
const fruits = ["apple", "banana", "cherry", "date", "elderberry"]
fruits.splice(2,1,"fig","grape")
console.log(fruits)

//question no. 2
console.log("Qs. 2")
const numbers = ["1","2","3","4"]
numbers.push("5", "6")
console.log("Upd Array: ", numbers)
const citrus = numbers.slice(3,7)
console.log("New Array: ", citrus)

//question no. 3
console.log("Qs. 3")
const animals = ["Kitty", "Bunny", "Becky"]
animals.shift()
animals.unshift("Lily")
console.log(animals)

//question no. 4
console.log("Qs. 4")
const num = ["10", "20", "30", "40", "50"]
console.log("Before update: ", num)
num.pop()
num.splice(1, 2, "60", "70")
console.log("Updated array: ",num)

//question no.5
console.log("Qs. 5")
const books = ["Verity","Twisted Hate","Ikigai","Rich Dad Poor Dad","Ugly Love","Twisted Love"]
const sliceBook = books.slice(2,5)
console.log(sliceBook)

