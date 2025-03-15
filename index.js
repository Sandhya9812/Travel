let user = document.getElementById("user");
let loginBtn = document.getElementById("loginBtn");
let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");

document.getElementById("submit").addEventListener("click", function(){
    let placeName = document.getElementById("placeName").value.trim();
 
    if (placeName === "") {
        alert("❌ Fill Form");
    } else {
        alert("✅ " + placeName + " Tour Booked!");
    }
 });

user.addEventListener("click", function(){
   document.querySelector(".loginPage").classList.toggle("active1");
})

loginBtn.addEventListener("click", function(){

   let email = document.getElementById("email");
   let pass = document.getElementById("pass");

   if(email.value == "" && pass.value == ""){
       alert("Please Fill Detail")
   }else{
       alert("You Logged In");
       document.querySelector(".loginPage").style.display="none"
   }

})
