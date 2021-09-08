/*Handler Event*/
const li_handler = document.querySelector("ul li:first-child");
const button_handler = document.querySelector(".button1");
button_handler.onclick = ()=>{
    const new_info = document.createElement("p")
    new_info.innerHTML = "<p>llevando a cabo funcion handler en Jascript con onclick</P>";
    li_handler.appendChild(new_info);
}

/*eventListener*/
const li_listener = document.querySelector("ul li:nth-child(2)");
const button_listener = document.querySelector(".button2");

button_listener.addEventListener("click", agregar_p);
function agregar_p(){
    const new_info2 = document.createElement("p");
    new_info2.innerHTML = "<p>Evento activado por addEventListener, luego de se elimino el evento con removeEventListener()</p>";
    li_listener.appendChild(new_info2);
    button_listener.removeEventListener("click", agregar_p);
}

/*objeto event*/
const li_event = document.querySelector("ul li:nth-child(3)");
const button_event = document.querySelector(".button3");
button_event.addEventListener("click", (event)=>{
    console.log(event);
    const new_info3 = document.createElement("p");
    new_info3.innerHTML = `<p><b>Mostrando propiedad de event e.targent:</b> ${event.target}</p>`;
    console.log(event.target);
    li_event.appendChild(new_info3);
})