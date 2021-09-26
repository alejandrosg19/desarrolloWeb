"use strict";

const edad = 10;

/*Operador ternario base*/
(edad > 18) ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

/*Operador ternario con mas lineas de codigo*/
(edad > 10) ? (
                console.log("mayor de edad"),
                console.log("Probando ternario 2")
             )
             :(
                console.log("menor de edad"),
                console.log("Probando ternario 2")
             )   


