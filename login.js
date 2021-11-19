document.querySelector("#pop-btn").addEventListener("click",function(){
    document.querySelector(".popin").classList.add("active");
});

document.querySelector(".popin .close_btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});