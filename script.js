window.onload = function(){
    let tituloBanner = document.querySelectorAll(".tituloBanner").item(0);
    let liMenu = document.querySelectorAll("#menu2 a");
    let aUp = document.querySelectorAll(".aUp").item(0);
    let aCart = document.querySelectorAll(".aCart").item(0);
    let quemSomosContainer = document.querySelectorAll(".quemSomosContainer").item(0);
    let App = document.querySelectorAll(".App").item(0);
    let menuClose   = document.getElementById("menuClose");
    let menu2 = document.getElementById("menu2");
    let menuIcon = document.getElementById("menuIcon");
    
    tituloBanner.classList.add("titleBannerMove");
    
    liMenu.forEach(element => {
        element.onclick = () => {
            menu2.style.left = "-100%";
        }
    })    
    menuClose.addEventListener("click",()=>{
        menu2.style.left = "-100%";
    });
    menuIcon.addEventListener("click",()=>{
        menu2.style.left = "-0%";
    });

    function verificarScroll(){
        scrollTopPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        if(scrollTopPosition >= 100){
            aUp.classList.add("aUpAlt");
            aCart.classList.add("aUpAlt");
        } else {
            aUp.classList.remove("aUpAlt");
            aCart.classList.remove("aUpAlt");
        }
        
        if(scrollTopPosition >= 700){
            App.classList.add("AppScroll");
        } else {
            App.classList.remove("AppScroll");
        }
        
        if(scrollTopPosition >= 1200){
            quemSomosContainer.classList.add("quemSomosScroll");
        } else {
            quemSomosContainer.classList.remove("quemSomosScroll");
        }        
    }

    window.addEventListener("scroll",function(){
        verificarScroll();
    });

    verificarScroll();
}

