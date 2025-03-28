let idnavbar= document.querySelector("#navclick").addEventListener("click",()=>{
    setTimeout(elmt=>{
        document.querySelector("#menulink").style.display="flex"
   },200) 
   setTimeout(elmt=>{
       document.querySelector("#menulink").style.display="none"
  },3000)
})

document.addEventListener("DOMContentLoaded", () => {
    const bigdoor = document.getElementById("bigdoor");
    const children = [
        document.getElementById("one"),
        document.getElementById("two"),
        document.getElementById("three"),
        document.getElementById("four")
    ];

    const colors = ["linear-gradient(45deg, red, orange)", "linear-gradient(45deg, green, lime)", "linear-gradient(45deg, blue, cyan)", "linear-gradient(45deg, yellow, gold)"];
    let delay = 500; // Délai initial

    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            
            children.forEach((div, index) => {
                setTimeout(() => {
                    div.style.opacity = 1;
                    div.style.transform = "scale(1)";
                    div.style.backgroundImage = colors[index];
                }, delay * (index + 1));
            });

        
            setTimeout(() => {
                const cadre = document.getElementById("cadre");
                cadre.style.transition = "transform 1s ease-in-out";
                cadre.style.transform = "rotate(360deg)";
            }, delay * children.length + 1000);

        
            setTimeout(() => {
                bigdoor.style.transition = "opacity 1s ease";
                bigdoor.style.opacity = 0;
                setTimeout(() => bigdoor.style.display = "none", 1000);
                document.getElementById("cancel").style.display="flex"
            }, delay * children.length + 2000);

            
            observer.disconnect(); 
        }
    });

    observer.observe(bigdoor);
});
