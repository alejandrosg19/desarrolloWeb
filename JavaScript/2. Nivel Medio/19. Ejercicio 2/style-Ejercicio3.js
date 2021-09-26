const boton = document.querySelector(".boton");

const peticion = async ()=>{
    let parrafo = document.createElement("P");
    let div_container = document.querySelector(".container__body");
    try{
        const request = await axios("https://reqres.in/api/unknow/1");
        parrafo.innerHTML =   `<p>Id: ${request.data.data.id} <br>Nombre: ${request.data.data.name}</p>`;
        div_container.appendChild(parrafo)
    }
    catch(e){
        parrafo.innerHTML =  "<p>Error en la Api</p>";
        div_container.appendChild(parrafo);
    }
    parrafo.classList.add("center");
    closeEvent();
}

function closeEvent(){
    boton.removeEventListener("click", peticion);
}

boton.addEventListener("click", peticion);