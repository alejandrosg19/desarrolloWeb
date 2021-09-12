/*Ejemplo de fetch sin await y sin async*/
/*El codigo esta correcto sin embargo el resultado es UDEFINED, debido a que estamos llamando a la función y esta no espera
a que se consulte la petición, por eso la importancia de async y await*/
const fecth_sin = ()=>{
    let respuesta;
    fetch("https://reqres.in/api/unknow/1")
        .then(res=>{
            if (res.ok) Promise.resolve(res);
            else Promise.reject("Ha ocurrido un error en la petición");
        })
        .then(res=>console.log(res))
        .catch(error=>console.log("EROR:" + error));
}

fecth_sin()


/*Ejemplo fetch con async y sin async*/
const fecth_con = async ()=>{
    let respuesta;
    let request = await fetch("https://reqres.in/api/unknow/1");
    if (request.ok == true) respuesta = await request.json()
    else respuesta = "Hubo en error en la petición";
    let HTMLCode = `<p>{
        "id: ${respuesta.data.id},
        "nombre: ${respuesta.data.name}
    }</p>`

    let parrafo = document.createElement("P")
    parrafo.innerHTML = HTMLCode
    document.querySelector(".container-resultado__fetch").appendChild(parrafo);
}

document.querySelector(".button_fetch").addEventListener("click", fecth_con);


/*Ejemplo axios con async y sin async*/
const axios_con = async ()=>{
    let respuesta;
    let request = await axios("https://reqres.in/api/unknow/1");
    if (request.status == 200) respuesta = request.data.data
    else respuesta = "Hubo en error en la petición";
    let HTMLCode = `<p>{
        "id: ${respuesta.id},
        "nombre: ${respuesta.name}
    }</p>`

    let parrafo = document.createElement("P")
    parrafo.innerHTML = HTMLCode
    document.querySelector(".container-resultado__axios").appendChild(parrafo);
}

document.querySelector(".button_axios").addEventListener("click", axios_con);
