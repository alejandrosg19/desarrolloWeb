const buttom = document.querySelector(".send-buttom");
let valor = buttom.value
buttom.value = valor.toUpperCase()

const contenedor = document.querySelector(".flex-container");

var crearLlave = (nombre, modelo, precio) =>{
    img = `<img class="llave-img" src="llave.png"></img>`
    nombre = `<h2>${nombre}</h2>`
    modelo = `<h3>${modelo}</h3>`
    precio = `<p>Precio: <b>$${precio}</b></p>`
    return[img, nombre, modelo, precio]
}

let documentFragment = document.createDocumentFragment()

function changeHidden(number){
    document.querySelector(".key-data").value = number;
}

for(var x=1; x<=20; x++){
    let modeloRandom = Math.round(Math.random()*10*30);
    let precioRandom = Math.round(Math.random()*10000);
    let llave = crearLlave(`llave ${x}`, `modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.tabIndex = x;
    div.classList.add(`flex-item`, `item-${x}`)
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment)
