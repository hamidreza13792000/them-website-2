
var dropdownmenufooter=document.querySelectorAll(".dropdownmenufooter");
var iconmenufooterdown=document.querySelectorAll(".iconmenufooterdown");

dropdownmenufooter.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    if(item.classList.contains("h-[50px]")){
        item.classList.remove("h-[50px]");
        item.classList.add("h-[200px]");
      iconmenufooterdown[index].classList.add("transform");
      iconmenufooterdown[index].classList.add("rotate-180");
    }
    else{
      item.classList.remove("h-[200px]");
      item.classList.add("h-[50px]");
      iconmenufooterdown[index].classList.remove("rotate-180");
    }
  });

});



