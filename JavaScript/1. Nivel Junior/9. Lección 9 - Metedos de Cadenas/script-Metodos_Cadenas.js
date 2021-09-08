let cadena = "Cadena de prueba";

/* concat()*/
let cadena2 = " Cadena 2";
let resultado = cadena.concat(cadena2 + " Cadena 3");
console.log(resultado)

/*startWith()*/
cadena1 = "Hola como estas?";
cadena2 = "Hola";
console.log(cadena1.startsWith(cadena2)); /*true*/
console.log(cadena1.startsWith(" Hola")); /*false*/

/*endWith()*/
cadena1 = "Adios corazon";
cadena2 = "corazon";
console.log(cadena1.endsWith(cadena2)); /*true*/
console.log(cadena1.endsWith("Corazon ")); /*false*/

/*include()*/
cadena1 = "Santiago es desarrollador";
cadena2 = "es de";
console.log(cadena1.includes(cadena2)); /*true*/
console.log(cadena1.includes("desarrollador ")); /*false*/

/*indexOf()*/
cadena1 = "Haciendo el curso de Dalto";
cadena2 = "curso";
console.log(cadena1.indexOf(cadena2)); /*12*/
console.log(cadena1.indexOf("desarrollador ")); /*-1*/

/*lasIndexOf()*/
cadena1 = "Haciendo el curso de Dalto Dalto Dalto";
cadena2 = "Dalto";
console.log(cadena1.lastIndexOf(cadena2)); /*33*/
console.log(cadena1.lastIndexOf("desarrollador ")); /*-1*/

/*padStart()*/
cadena1 = "Hola";
console.log(cadena1.padStart(10, "123")); /*123123Hola*/

/*endStart()*/
cadena1 = "Hola";
console.log(cadena1.padEnd(10, "123")); /*Hola123123*/

/*repeat()*/
cadena1 = "Hola ";
console.log(cadena1.repeat(5)); /*Hola Hola Hola Hola Hola */

/*split()*/
cadena1 = "Hola como estas";
resultado = cadena1.split(" ")
console.log(resultado); /*["Hola", "como", "estas"]*/
console.log(resultado[0]) /*Hola*/
console.log(resultado[1]) /*como*/
console.log(resultado[2]) /*estas*/

/*substring()*/
cadena1 = "Hola que tal?";
console.log(cadena1.substring(1, 6)); /*ola q*/

/*toLowerCase()*/
cadena1 = "HOLA BEBA";
console.log(cadena1.toLowerCase()); /*hola beba*/

/*toUpperCase()*/
cadena1 = "hola nena";
console.log(cadena1.toUpperCase()); /*HOLA NENA*/

/*toLowerCase()*/
cadena1 = 10;
console.log(cadena1.toString() + 20); /*"1020"*/

/*trim()*/
cadena1 = "  Hola   ";
console.log(cadena1.length) /*9*/
resultado = cadena1.trim()
console.log(resultado.length); /*4*/

/*trim()*/
cadena1 = "  Hola   ";
console.log(cadena1.length) /*9*/
resultado = cadena1.trimStart()
console.log(resultado.length); /*7*/

/*trim()*/
cadena1 = "  Hola   ";
console.log(cadena1.length) /*9*/
resultado = cadena1.trimEnd()
console.log(resultado.length); /*6*/