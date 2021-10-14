"use strict";

let cache = [];
const memoizer = func => { //Pasamos la función
    return e => { //retornamos función que tiene un parametro
        const index = e.toString(); //convertimos el valor de vuelto e string
        if (cache[index] == undefined){
            cache[index] = func(e); //guardamos el valor que respondio la función en el array cache
        }
        return cache[index];
    }
}
const hacerOperacion = num=>{
    const a = 20;
    const b = 12;
    let c = 0;
    for(let i = num -1; i >= 0; i--){
        for(let j = i - 1; j>=0; j--){
            c += a*b;
        }
    }
    console.log("Imprimiendo Valor: ", c);
    return c;
}


console.log("Función sin memoizer")

const date = new Date();
hacerOperacion(70000);
console.log(new Date() - date);

const date2 = new Date();
hacerOperacion(70000);
console.log(new Date() - date2);

const date3 = new Date();
hacerOperacion(70000);
console.log(new Date() - date3);

const date4 = new Date();
hacerOperacion(70000);
console.log(new Date() - date4);

console.log("Función con memoizer")
const memo = memoizer(hacerOperacion);


const date5 = new Date();
memo(70000);
console.log(new Date() - date5);

const date6 = new Date();
memo(70000);
console.log(new Date() - date6);

const date7 = new Date();
memo(70000);
console.log(new Date() - date7);

const date8 = new Date();
memo(70000);
console.log(new Date() - date8);