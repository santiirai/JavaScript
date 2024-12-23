const h = document.getElementById("hello")
h.textContent = "<h2>Hiiiiii</h2>"
console.log(h)
// h.innerHTML = "Shanti"

// const n = document.getElementsByTagName("h3")[0]
// console.log(n)
// n.innerHTML = "Peace" 

// const vv=document.getElementsByClassName("Ram")[0]
// vv.innerHTML = "Welcome to C programming class"

const sah = document.querySelector("#hello")
sah.innerHTML = "Hellllllooooo"
sah.forEach(function (e){
    e.innerHTML = "hiihihihihihihih"
})
console.log(sah)