"use strict";

/*Imprimiendo array*/
const arrayNombres = ["Santiago", "Alejandro", "Gonzalez", "Piracon"];
console.log("IMPRIMIENDO ARRAY");
console.log(arrayNombres);

/*Imprimiendo cada Item del array*/
console.log("IMPRIMIENDO ITEMS DE ARRAY");
console.log(arrayNombres[0], arrayNombres[1], arrayNombres[2], arrayNombres[3]);

/*Usando Operador Spread*/
console.log("IMPRIMIENDO ITEMS DE ARRAY CON OPERADOR SPREAD");
console.log(...arrayNombres);


/*Operador Spread con funciones*/

const sumar = (...valores) =>{
    let sum = 0;
    for(let i=0; i<valores.length; i++){
        sum += parseInt(valores[i]);
    }
    return sum;
}

console.log("FUN RECIBE VALORES DE ARRAY DESESTRUCTURADOS PARA SUMAR");
console.log(sumar(1,2,3,4,5,6,7,9));