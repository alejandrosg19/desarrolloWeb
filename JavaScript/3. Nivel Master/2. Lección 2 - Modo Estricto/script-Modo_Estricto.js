/*Codigo sin use strict*/
function notUseStrict(){
    /*Variable no declarada*/
    nombre = "Santiago";
    console.log(nombre);

    /*defineProperty propiedad de lectura*/
    let arrayNombre = {}
    Object.defineProperty(arrayNombre, 'nombre', {value: 'Pedro', writeable: true});
    console.log(arrayNombre.nombre);
    arrayNombre.nombre = 'Alejandro';
    console.log(arrayNombre.nombre);

    /*prevenExtensiones, no permite agregar mas propiedades al objeto*/
    Object.preventExtensions(arrayNombre);
    console.log(arrayNombre);
    arrayNombre.apellido = "Piracon";

    /*Propiedades en String*/
    let edad = "23 años";
    console.log(edad)
    edad.fecha = "1998";
    console.log(edad.fecha)
}


/*Codigo con use strict*/
function useStrict(){
    "use strict";

    /*Variables tienen que ser declaradas*/
    let apellido = "Gonzalez";
    console.log(apellido);

    /*No permite modifiar una propiedad con un valor de writeable=true*/
    /*defineProperty propiedad de lectura*/
    let arrayNombre = {}
    Object.defineProperty(arrayNombre, 'nombre', {value: 'Diego', writeable: true});
    console.log(arrayNombre.nombre);

    /*prevenExtensiones, no permite agregar mas propiedades al objeto*/
    Object.preventExtensions(arrayNombre);
    console.log(arrayNombre);

    /*Propiedades en String salta error*/
    let edad = "23 años";
    console.log(edad)
}


notUseStrict();
useStrict();