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

//var at = indexOf("@");
//var dot = lastIndexOf(".");
//if(at<1||dot<at+2||dot+2  >= email.length ){
  // alert("invalid email");
   //return false; 
//}

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

 if(passwordc == !passwordc){
    alert("enter paasword don't match");
    return false; 
    
 }
 //validates contact
 if(contact == ""){
    alert("enter your contacts please");
    return false; 
    
 }
 if(contact == isNaN){
    alert("your contacts should be a number");
    return false; 
    
 }
 if(contact.length<10){
    alert(" your contacts should be complete");
    return false; 
    
}

}