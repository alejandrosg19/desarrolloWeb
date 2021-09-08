/*Event Flow: Even Bubbling*/
const contenedor1 = document.querySelector(".contenedor1");
const button1 = document.querySelector(".button1");

contenedor1.addEventListener("click", ()=>{alert("Has presionado el CONTENEDOR de Event Blingg")});
button1.addEventListener("click", ()=>{alert("Has presionado el BOTON1 de Event Blingg")});

/*Event Flow: Even Capturing*/
const contenedor2 = document.querySelector(".contenedor2");
const contenedor3 = document.querySelector(".contenedor3");
const button2 = document.querySelector(".button2");

contenedor2.addEventListener("click", ()=>{alert("Has presionado el CONTENEDOR ROJO de Event Blingg")}, true);
contenedor3.addEventListener("click", ()=>{alert("Has presionado el CONTENEDOR AZUL de Event Blingg")}, true);
button2.addEventListener("click", ()=>{alert("Has presionado el BOTON2 de Event Blingg")});