const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");

const contenedor1 = document.querySelector(".contenedor1");
const contenedor3 = document.querySelector(".contenedor3");

/*click*/
button.addEventListener("click", ()=>{alert("Se ejecuto evento de UN SOLO CLICK en el boton 1")});
button3.addEventListener("click", ()=>{alert("Se ejecuto evento de UN SOLO CLICK en el boton 3")});

/*dbclick*/
button2.addEventListener("dblclick", ()=>{alert("Se ejecuto evento de DOBLE CLICK en el boton 2")});
button4.addEventListener("dblclick", ()=>{alert("Se ejecuto evento de DOBLE CLICK en el boton 4")});

/*mouseover*/
contenedor1.addEventListener("mouseover", ()=>{alert("Se ejecuto el evento de MOUSEOVER")});

/*mouseout*/
contenedor3.addEventListener("mouseout", ()=>{alert("Se ejecuto el evento de MOUSEOUT")});

/*contextmenu*/
button.addEventListener("contextmenu", ()=>{alert("Se ejecuto evento de CLICK DERECHO en el boton1")});
button2.addEventListener("contextmenu", ()=>{alert("Se ejecuto evento de CLICK DERECHO en el boton2")});
button3.addEventListener("contextmenu", ()=>{alert("Se ejecuto evento de CLICK DERECHO en el boton3")});
button4.addEventListener("contextmenu", ()=>{alert("Se ejecuto evento de CLICK DERECHO en el boton4")});


/*mousedown*/
button5.addEventListener("mousedown", ()=>{alert("Se ejecuto evento de MOUSEDOWN en el boton 5")});

/*mouseup*/
button6.addEventListener("mouseup", ()=>{alert("Se ejecuto evento de MOUSEUP en el boton 6")});