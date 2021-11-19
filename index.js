document.querySelector("#show_login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close_btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

function validate(){
  var username= document.forms["myForm"]["uName"].value;
  var email= document.forms["myForm"]["email"].value;
  var password= document.forms["myForm"]["password"].value;
  var passwordc= document.forms["myForm"]["passwordc"].value;
  var contact= document.forms["myForm"]["contact"].value;
  var remember= document.getElementById("remember_me");
 //validates user name
  if(username == ""){
     alert("enter user name please");
     return false; 
     
  }

 if(username == !isNaN){
    alert("your contacts should be a number");
    return false; 
    
 }

//validate email

if(email == ""){
   alert("enter your email please");
   return false; 
   
}
          var at=email.indexOf("@");
            var dot=email.lastIndexOf(".");
            if(at<1||dot<at+2||dot+2 >=email.length)
            {
                alert("Not a valid email");
                return false;
            }

  //validates password
  if(password == ""){
    alert("enter  password");
    return false; 
    
 }
 if( password.length  != 8){
     alert("password should have be 8 characters")
     return false;
 }
 //confirms passweord
 if(passwordc == ""){
    alert("confirm password please");
    return false; 
    
 }

 if(password !== passwordc){
    alert("pasword don't match");
    return false; 
    
 }
 //validates contact
 if(contact == ""){
    alert("enter your contacts please");
    return false; 
    
 }
 if(isNaN(contact)){
    alert("your contacts should be a number");
    return false; 
    
 }
 if(contact.length<10){
    alert(" your contacts should be complete");
    return false; 
    
}
else{
   alert("registration successful");
   return true;
   
}

}