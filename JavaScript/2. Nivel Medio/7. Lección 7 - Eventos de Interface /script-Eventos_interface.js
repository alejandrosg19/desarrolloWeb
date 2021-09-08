/*error*/
const img = document.querySelector("img");
img.addEventListener("error", ()=>{
    console.log("Ocurrio un error con la imagen");
})

/*load*/
window.addEventListener("load", ()=>{
    console.log("Se cargo la pagina")
})

/*before*/
window.addEventListener("before", ()=>{
    console.log("Evento de BEFORE activo: activado antes de que te vayas de la pagina")
})

/*unload*/
window.addEventListener("unload", ()=>{
    console.log("Evento de UNLOAD activo: activado en el momento en que dejas la paina.")
})

/*resize*/
window.addEventListener("resize", ()=>{
    console.log("Evento RESIZE, se activa cuando la ventana cambia de tamaño.");
});

/*scroll*/
window.addEventListener("scroll", ()=>{
    console.log("Evento SCROLL, se activa cuando haces  un scroll");
});

/*select*/
const input = document.querySelector("input");
const contenedor = document.querySelector(".seleccionado");
input.addEventListener("select", (e)=>{
    console.log(e);
})