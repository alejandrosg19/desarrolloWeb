/**Funciones*/

/*Función Clasica*/
function funcEstado(estado){
    if(estado == "bien"){
        console.log("Me alegra mucho que estes bien")
    }else{
        console.log("Que mal como la estas pasando.")
    }
}

let estado = prompt("Como te encuentras el dia de hoy?") 
funcEstado(estado)

/*Función Variable*/

let funcEstado2 = function(estado){
    if(estado == "bien"){
        console.log("Me alegra mucho que estes bien")
    }else{
        console.log("Que mal como la estas pasando.")
    }
}

estado = prompt("Como te encuentras el dia de hoy?") 
funcEstado2(estado) 

/*Funciones Flecha*/

/*Ej 1: Sin (), {} y return automatico*/
let funConstat = nombre => console.log(`Bienvenido ${nombre} a esta pagina`)
funConstat("Santiago")

/*Ej 2 Sin {} y return automatico*/
let funcSuma = (numero1, numero2) => `El valor de ${numero1} + ${numero2} = ` + (numero1 + numero2)
let resultado = funcSuma(5, 6)
console.log(resultado)

/*Ej 3*/
let funcExp = (numero1, numero2) =>{
    let exponencial = numero1**numero2;
    return `${numero1} ** ${numero2} = ${exponencial}`
}
console.log(funcExp(2,4))