// Write a javascript program to create an array of objects representing students
// where each object has a name and age property.Use the map() method to
// create a new array containing only the ages of the students.Print the new array.

const students = [
    { name: "Taylor", age: 21 },
    { name: "Anna", age: 20 },
    { name: "Coolen", age: 19 },
    { name: "Avril", age: 19 },
];
const agesArray = students.map(function (student) {
    return student.age;
});
console.log(agesArray);