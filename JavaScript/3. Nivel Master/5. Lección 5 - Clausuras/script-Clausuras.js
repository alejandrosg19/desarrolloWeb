"use strict";
const texto = document.querySelector(".container__texto");

/*Procedimiento sin clausuraas*/
// const cambiarTexto = tamanio => texto.style.fontSize = `${tamanio}px`;

// document.querySelector(".px12").addEventListener("click", ()=>cambiarTexto(12));
// document.querySelector(".px14").addEventListener("click", ()=>cambiarTexto(14));
// document.querySelector(".px16").addEventListener("click", ()=>cambiarTexto(16));


/*Procedimiento con clausuras*/
const cambiarTexto = (tamanio) => {
    return ()=>{
        texto.style.fontSize = `${tamanio}px`;
    }
}

const px12 = cambiarTexto(12);
const px14 = cambiarTexto(14);
const px16 = cambiarTexto(16);

document.querySelector(".px12").addEventListener("click", px12);
document.querySelector(".px14").addEventListener("click", px14);
document.querySelector(".px16").addEventListener("click", px16);