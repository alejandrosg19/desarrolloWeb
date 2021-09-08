const contenedor = document.querySelector(".Ejercicio");
const new_element = document.createElement("P");
const new_element2 = document.createElement("P");

const showName = (name)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{res(name)}, Math.random() * 200);
    })
}

/*Ejemplo con promesas sin await y async*/
new_element.innerHTML = "<p><b>Ejemplo de promesas SIN await y async: </b> No se espera a que una función termine primero. Funciones no se ejecutan en orden</p>"
showName("1. Santiago").then((resultado) =>{new_element.innerHTML += `<p>${resultado}</p>`;});
showName("2. Alejandro").then((resultado) =>{new_element.innerHTML += `<p>${resultado}</p>`;});
showName("3. Gonzalez").then((resultado) =>{new_element.innerHTML += `<p>${resultado}</p>`;});

contenedor.appendChild(new_element);


/*Ejemplo con promesas CON await y async*/
new_element2.innerHTML = "<p><b>Ejemplo de promesas CON await y async: </b> Se espera a que una función termine primero. Funciones si se ejecutan en orden</p>"
const fuction_async = async ()=>{
    data1 = await showName("1. Santiago");
    data2 = await showName("2. Alejandro");
    data3 = await showName("3. Gonzalez");
    new_element2.innerHTML += `<p>${data1}</p>`;
    new_element2.innerHTML += `<p>${data2}</p>`;
    new_element2.innerHTML += `<p>${data3}</p>`;
}

fuction_async();
contenedor.appendChild(new_element2);
