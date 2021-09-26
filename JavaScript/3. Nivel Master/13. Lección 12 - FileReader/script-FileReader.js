"use strict";

const archivo = document.getElementById("archivo");

archivo.addEventListener("change", (e)=>{
    leerArchivo(archivo.files[0]);
})

const leerArchivo = archivo =>{
    const obj_file = new FileReader();
    if (archivo.type=="text/plain"){
        obj_file.readAsText(archivo)
        obj_file.addEventListener("load", (archivoCargado) => {
        console.log(archivoCargado.currentTarget.result)
        })
    }else if(archivo.type == "image/png" || archivo.type == "image/jpg"){
        const img = document.getElementById("imagen");
        obj_file.readAsDataURL(archivo)
        obj_file.addEventListener("load", (imagen) => {
            img.setAttribute("src", `${imagen.currentTarget.result}`);
        })
    }
    
}
