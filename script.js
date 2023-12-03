window.onload = function(){
    let tituloBanner = document.querySelectorAll(".tituloBanner").item(0);
    let menuClose   = document.getElementById("menuClose");
    let menu2 = document.getElementById("menu2");
    let menuIcon = document.getElementById("menuIcon");
    
    tituloBanner.classList.add("titleBannerMove");
    
    menuClose.addEventListener("click",()=>{
        menu2.style.left = "-100%";
    });
    menuIcon.addEventListener("click",()=>{
        menu2.style.left = "-0%";
    });
}