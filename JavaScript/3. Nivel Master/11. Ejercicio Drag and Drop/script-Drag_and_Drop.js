"use strict";

const zona = document.querySelector(".zona");
zona.addEventListener("dragover", (e)=>{
    e.preventDefault()
})
zona.addEventListener("drop", (e)=>{
    let n = e.dataTransfer.getData("textura")
    zona.style.background = `url(textura${n}.png)`
})

for(let i=0; i < document.querySelector(".texturas").children.length; i++){
    let n = i+1
    document.querySelector(`.textura${(n)}`).addEventListener("dragstart", (e)=>transferirTextura(n,e))
}

const transferirTextura = (n,e) =>{
    e.dataTransfer.setData("textura",n);
}