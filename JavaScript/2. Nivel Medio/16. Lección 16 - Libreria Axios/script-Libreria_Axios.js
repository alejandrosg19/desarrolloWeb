/*Imprimiendo todo el objeto de respuesta a la petición*/
const request = axios("https://reqres.in/api/unknow/2");
request.then((res)=>{console.log(res)});

/*Imprimiendo la respuesta del objeto en metodo GET*/
const request2 = axios.get("https://reqres.in/api/unknow/2");
request2.then(res=>console.log(res.data.data));

/*Imprimiendo la respuesta del objeto en metodo POST*/
const body = {
    "nombre": "Santiago",
    "apellido": "Gonzalez"
}
const request3 = axios.post("https://reqres.in/api/users", body);
request3.then(res=>console.log(res.data));