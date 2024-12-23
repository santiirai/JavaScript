const bulbSwitch = document.querySelector("#bulbswitch");
const bulb = document.querySelector("#bulb");

bulbSwitch.addEventListener("click", function(){
   console.log(bulb.src)
   if(bulb.src.match= 'off'){
    bulb.src = "./pic_bulbon.gif";
    bulbSwitch.innerHTML = "Turn OFF"
   }else{
    bulb.src = "./pic_bulboff.gif";
    bulbSwitch.innerHTML = "Turn ON"
   }
})