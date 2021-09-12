/*Impriendo el objeto, obtenemos una promesa encapsulada*/
/*Por default si no asignamos el metodo de la peticion fetch coge GET*/
console.log("Imprimiendo Promesa")
const request = fetch("https://reqres.in/api/unknow/2");
request.then(res=>{console.log(res.text())});

/*Imprimiendo la respuesta del objeto en formato text()*/
console.log("Impriendo respuesta en formato string")
const request2 = fetch("https://reqres.in/api/unknow/2");
request2
    .then(res=>res.text())
    .then(res=>console.log(res))


/*Imprimiendo la respuesta del objeto en formato json()*/
console.log("Impriendo respuesta en formato json")
const request3 = fetch("https://reqres.in/api/unknow/2");
request3
    .then(res=>res.json())
    .then(res=>console.log(res))


/*METODO POST*/
const headers = {
    method: "POST",
    body: JSON.stringify({
        "nombre": "Santiago",
        "apellido": "Gonzalez"
    }),
    headers: {"Content-type": "application/json"}
}
const request4 = fetch("https://reqres.in/api/users", headers);
request4
    .then(res=>res.json())
    .then(res=>{console.log(res)})

    
/*formato blob()*/
// const imagen = document.querySelector(".imagen");

// const request5 = fetch("codigo.png");
// request5
//     .then(res=>res.blob())
//     .then(img=>imagen.src = URL.createObjectURL(img))

