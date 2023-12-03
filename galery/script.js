window.onload = function(){
    let btnAvancar = document.getElementById("avancar");
    let btnVoltar  = document.getElementById("voltar");
    let container  = document.getElementById('container');
    let imgs = document.querySelectorAll("#container img");

    imgs.forEach((element,index) => {
        if(element.hasAttribute('data-link')){
            element.style.cursor = "pointer";  
            element.onclick = function(){
                window.location.href = element.dataset.link;
            }
        }
        if(element.hasAttribute('data-linkexternal')){
            element.style.cursor = "pointer";
            element.onclick = function(){
                window.open(element.dataset.linkexternal, '_blank');
            }
        }
        
        /*if(element.hasAttribute('data-title')){
            // Criação da div dinamicamente
            var novaDiv = document.createElement('div');
            
            // Adição de uma classe à div (opcional)
            novaDiv.classList.add('titleImg');

            // Adição de conteúdo à div (opcional)
            novaDiv.innerHTML = element.getAttribute("data-title");

            novaDiv.style.left = (index*265) + "px";
            container.appendChild(novaDiv);
        }*/
    })

    btnAvancar.addEventListener("click",()=>{
        btnAvancar.disabled = true;
        btnVoltar.disabled = true;
        imgs = document.querySelectorAll("#container img");
        container.insertBefore(imgs.item(imgs.length-1), container.firstChild);
        for(img of imgs){
            img.style.transition = "0ms";
            img.style.left = "-250px";
        }
        setTimeout(()=>{
            for(img of imgs){
                img.style.transition = "250ms";
                img.style.left = "0px";
            }
            btnAvancar.disabled = false;
            btnVoltar.disabled = false;
        },100)
    })
    btnVoltar.addEventListener("click",()=>{

        btnAvancar.disabled = true;
        btnVoltar.disabled = true;
        
        for(img of imgs){
            img.style.transition = "250ms";
            img.style.left = "-250px";
        }
        imgs = document.querySelectorAll("#container img");
        
        setTimeout(()=>{
            container.appendChild(imgs.item(0));
            
            for(img of imgs){
                img.style.transition = "0ms";
                img.style.left = "0px";
            }
            btnAvancar.disabled = false;
            btnVoltar.disabled = false;
        },250)
    })
    setInterval(()=>{ btnVoltar.click(); },10000)
}