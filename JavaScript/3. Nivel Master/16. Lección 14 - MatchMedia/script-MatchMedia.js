"use strict";

const mql = matchMedia("(max-width: 1000px)");
const div = document.querySelector(".caja");

mql.addEventListener("change", ()=>{
    if(mql.matches) div.classList.replace('caja', 'responsive-caja');
    else if(div.className == "responsive-caja") div.classList.replace('responsive-caja', 'caja');
})