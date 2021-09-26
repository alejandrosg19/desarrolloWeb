"use strict";


const contenedor = document.querySelector(".zona-arrastre");

contenedor.addEventListener("dragover", (e)=>{
    e.preventDefault()
    changeStyle(e.srcElement, "#444");
})

contenedor.addEventListener("dragleave", (e)=>{
    e.preventDefault()
    changeStyle(e.srcElement, "#888");
})

contenedor.addEventListener("drop", (e)=>{
    e.preventDefault()
    changeStyle(e.srcElement, "#888");
    cargarArchivo(e.dataTransfer.files[0]);
})

const changeStyle = (element, color) =>{
    element.style.color = color;
    element.style.border = (`4px dashed ${color}`);
}

const cargarArchivo = ar =>{
    console.log(ar)
    const reader = new FileReader();
    const resultado = document.querySelector(".resultado");

    if(ar.type == "text/plain"){
        reader.readAsText(ar)
        reader.addEventListener("load", (archivo)=>{
        resultado.textContent = archivo.currentTarget.result;
        })
    }else if(ar.type == "image/png" || ar.type == "image/jpg"){
        reader.readAsDataURL(ar)
        reader.addEventListener("load", (img)=>{
            const imagen = document.createElement("img");
            imagen.setAttribute("src", `${img.currentTarget.result}`);
            resultado.appendChild(imagen)
        })
    }else if(ar.type == 'video/mp4'){
        reader.readAsArrayBuffer(ar);
        reader.addEventListener("progress", e=>{
            let carga = Math.round(e.loaded / ar.size * 100);
            contenedor.textContent = `${carga}%`;
            document.querySelector(".barra-de-carga").style.padding = "75px 20px";
            //Dividimos la carga entre 3.6 para que el width de la barra de carga no cargue tan rapido, mas rapido que el porcentaje en el que vamos
            // es decir que vayamos en un porcentaje de 30% y se vea ya el width casi que completo.
            document.querySelector(".barra-de-carga").style.width = `${carga}%`;
        })
        reader.addEventListener("loadend", e=>{
            changeStyle(contenedor, "4f9");
            contenedor.style.borderstyle = "solid";
            document.querySelector(".barra-de-carga").style.background = "#4f9";
            setTimeout(()=>{
                contenedor.style.color = "#fff";
                contenedor.style.animation = "aparecer 1s forwards";
                contenedor.textContent = "¡Carga Completa!"
            }, 0.05)
        })
        reader.addEventListener("load", (e)=>{
            let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"});
            let url = URL.createObjectURL(video);
            let img = document.createElement('VIDEO');
            img.setAttribute("src", url);
            resultado.appendChild(img);

            contenedor.style.border = "4px solid #888"
            img.play()
        })
    }
}