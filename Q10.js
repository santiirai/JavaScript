//Write a javascript program to create an array of objects representing books,
// where each object has a title and author property. Use splice() to remove the
// second book from the array. Print the modified array.
let book = [
    {Title: "Twisted Love", author: "Collen Hover"},
    {Title: "Varity", author: "Anna Huang"}
]
book.splice(1,2)
console.log(book)