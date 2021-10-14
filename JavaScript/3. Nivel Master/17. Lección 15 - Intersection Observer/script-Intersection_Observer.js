"use strict";

const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries) =>{
    for(const entry of entries){
        if(entry.isIntersecting) console.log("Se esta viendo la caja: "+ entry.target.textContent);
    }
}

const observer = new IntersectionObserver(verifyVisibility);

for(const caja of cajas){
    observer.observe(caja);
}

