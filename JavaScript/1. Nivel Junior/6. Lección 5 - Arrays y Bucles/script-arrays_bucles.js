/*Array*/ 
let array = ["Santiago", "Alejandro", 2, 5,6]
console.log(array[0])

/*Array Asociativo*/ 
let persona = {
    nombre: "Santiago",
    apellido: "Alejandro",
    edad : 23,
    estrato: 1
}
console.log(persona["nombre"])

/**Bucles */
/*while*/
let variable = 0;
while(variable < 5){
    variable++;
}
console.log(variable)

/*do while*/
variable = 0;
do{
    variable++;
}while(variable < 10)
console.log(variable)

/*for*/
for(let variable2=0; variable2<15; variable2++){
    console.log("Ciclo for - valor de vriable: " + variable2)
}

/*for in*/
let variableArray = ["Santiago", "Alejandro", 23, 2];
for(valor in variableArray){
    console.log("el valor tomado por la variable valor es: " + variableArray[valor])
}

/*for of*/
let variableArray2 = ["Santiago", "Alejandro", 23, 2];
for(valor of variableArray2){
    console.log("el valor tomado por la variable valor es: " + valor)
}


/** Sentencias en bucles*/
/*break*/
variable = 0; 
while(variable < 5){
    if(variable == 2){
        break;
    }
    variable++;
}
console.log(variable)

/*continue*/
variable = 0;
for(let variable3 = 10; variable3 >=0; variable3--){
    if(variable3 % 2 == 0){
        continue;
    }
    variable++
}
console.log(variable)

/*label*/
let arreglo1 = ["santiago", "alejandro", "diego"]
let arreglo2 = ["kevin", "mateo", arreglo1, "yamis"]

forInicial:
for(array in arreglo1){
    if(array == 2){
        for(array of arreglo1){
            if(array == "alejandro"){
                break forInicial;
            }
            console.log(array)
        }
    }else{
        console.log(arreglo2[array])
    }
}