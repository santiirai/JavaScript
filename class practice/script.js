/*
let a = 3; //not redeclare
{
    let a=30;
    console.log(a)
}
console.log(a)
*/

var a = 30 //redeclare
var a = 20
{
    var a = 10
}
console.log(a)