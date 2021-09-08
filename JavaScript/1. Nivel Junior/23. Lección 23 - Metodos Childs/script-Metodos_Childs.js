/*Obteniendo elemento contenedor, creando nuevo elemento H2 y agregangole texto.*/
const contenedor = document.querySelector(".contenedor");
const h2_viejo = document.querySelector(".h2");
const h2_nuevo = document.createElement("H2")
h2_nuevo.innerHTML = "H2 Nuevo";;

/*replaceChild()*/
contenedor.replaceChild(h2_nuevo, h2_viejo);

/*removeChild()*/
const element_remove = document.querySelector(".remove_p")
contenedor.removeChild(element_remove)

/*hasChildNodes()*/
const elemento_vacio = document.createElement("H3");
let respuesta = elemento_vacio.hasChildNodes();
document.write(`<p>El elemento_vacio tiene elementos hijos? <b>${respuesta}</b></p>`)
respuesta = h2_nuevo.hasChildNodes()
document.write(`<p>El h2_nuevo tiene elementos hijos? <b>${respuesta}</b></p>`)