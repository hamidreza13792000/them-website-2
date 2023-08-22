var menuicon =document.querySelector(".menuicon");
var closeicon=document.querySelector(".closeicon");
var menumobile=document.querySelector(".menumobile");
var submenuitem=document.querySelectorAll(".submenuitem");
var submenuitem1=document.querySelectorAll(".submenuitem ul");
var arrowmenumobile=document.querySelectorAll(".arrowmenumobile");

menuicon.addEventListener("click",()=>{
    menuicon.classList.toggle("hidden");
    closeicon.classList.toggle("hidden");
    menumobile.classList.remove("h-[0px]")
    menumobile.classList.add("h-[750px]")

});

closeicon.addEventListener("click",()=>{
    menuicon.classList.toggle("hidden");
    closeicon.classList.toggle("hidden");
    menumobile.classList.remove("h-[750px]")
    menumobile.classList.add("h-[0px]")

});

submenuitem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        submenuitem1[index].classList.toggle("h-[0px]")
        submenuitem1[index].classList.toggle("h-[200px]")
        arrowmenumobile[index].classList.toggle("rotate-180");
    });
});