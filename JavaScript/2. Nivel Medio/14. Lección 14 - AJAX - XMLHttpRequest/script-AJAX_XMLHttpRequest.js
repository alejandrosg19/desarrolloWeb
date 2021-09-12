/*Petición GET*/
let request;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

console.log("METODO GET");
request.addEventListener("load", ()=>{
    let respuesta;
    if(request.status==200) respuesta = JSON.parse(request.response);
    else respuesta = "No se encontro la pagina";
    console.log(respuesta);
});

request.open("GET", "informacion.txt");
request.send();


/*Petición POST*/
console.log("METODO POST");
let request2 = new XMLHttpRequest();
request2.addEventListener("load", ()=>{
    let respuesta;
    if(request2.status==200 || request2.status == 201) respuesta = JSON.parse(request2.response);
    else respuesta = "No se encontro la pagina";
    console.log(respuesta);
});

let body = JSON.stringify({
    "nombre":  "Santiago" ,
    "trabajo":  "Desarrollador" 
})

request2.open("POST", "https://reqres.in/api/users");
request2.setRequestHeader("Content-type","application/json;charset=UTF8");
request2.send(body);