var menuicon =document.querySelector(".menuicon");
var closeicon=document.querySelector(".closeicon");
var menumobile=document.querySelector(".menumobile");
var submenuitem=document.querySelectorAll(".submenuitem");
var submenuitem1=document.querySelectorAll(".submenuitem ul");

menuicon.addEventListener("click",()=>{
    menuicon.classList.toggle("hidden");
    closeicon.classList.toggle("hidden");
    menumobile.classList.remove("hidden")
});

closeicon.addEventListener("click",()=>{
    menuicon.classList.toggle("hidden");
    closeicon.classList.toggle("hidden");
    menumobile.classList.add("hidden");
});

submenuitem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        submenuitem1[index].classList.toggle("hidden")
    });
});