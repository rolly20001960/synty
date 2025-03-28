let idnavbar= document.querySelector("#galery").addEventListener("click",()=>{
    setTimeout(elmt=>{
        document.querySelector("#navbarlink").style.display="flex"
        document.querySelector("#element").style.display="none"
   },200) 
   setTimeout(elmt=>{
       document.querySelector("#navbarlink").style.display="none"
       document.querySelector("#element").style.display="flex"
  },3000)
})
