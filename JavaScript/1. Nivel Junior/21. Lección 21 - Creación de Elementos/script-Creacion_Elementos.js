const elemento = document.querySelector(".contenedor");

/*Creando nuevo elemento HTML*/
const newElement = document.createElement("LI");
console.log(newElement);

/*Creando nuevo texto*/
const newTextNode = document.createTextNode("Soy un nodo de texto creado desde Javascript");

/*Aregando codigo HTML al DOM con appendChild*/
elemento.appendChild(newElement)
elemento.appendChild(newTextNode)


/*Usando createDocumentFragment*/

let fragmento = document.createDocumentFragment();
for(let x =0; x<10; x++){
    let nuevoElemento = document.createElement("LI");
    nuevoElemento.innerHTML = "Soy un nuevo elemento";
    fragmento.appendChild(nuevoElemento);
}
elemento.appendChild(fragmento)

