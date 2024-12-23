const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//error mssg function
function errorMssg(input, mssg){
    const formm = input.parentElement;
    //console.log(form_control)
    formm.className = "formm error"
    const small = formm.querySelector("small")
    small.innerText = mssg;
}
//success mssg fuction
function successMsg(input ){
    const formm = input.parentElement;
    formm.className = "formm success";
}

//event listener
form.addEventListener('submit',function(e){
    e.preventDefault();
    //function to validate all fields
    validateAll([username, email, password, cpassword])







    // //username
    // if(username.value === ""){
    //     //alert("Username is empty ");
    //     errorMsg(username, "Username is required.")
    // }else{
    //     //alert("Username is success")
    //     successMsg
    // }
    // if(email.value === ""){
    //     errorMsg(email,"Email is required.")
    // }else{
    //     successMsg(email);
    // }
})
