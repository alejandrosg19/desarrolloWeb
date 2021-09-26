"use strict";

const elemento = document.querySelector(".circulo");
const contenedor = document.querySelector(".cuadrado");

elemento.addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData("clase", e.target.className);
});
// elemento.addEventListener("drag", ()=>console.log(2));
// elemento.addEventListener("dragend", ()=>console.log(3));

contenedor.addEventListener("dragenter", ()=>console.log(1));
contenedor.addEventListener("dragover", (e)=> {
    e.preventDefault()
    console.log(2)
});
contenedor.addEventListener("drop", (e)=>{
    console.log(e.dataTransfer.getData("clase"));
});
contenedor.addEventListener("dragleave", ()=>console.log(4));