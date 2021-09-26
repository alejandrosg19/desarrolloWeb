/*EStructura de función flecha*/
const funcionFlecha = () => {
    console.log("Soy una funcion flecha");
}
funcionFlecha();

/*Segundo tipo de función flecha*/
const funcionFlecha2 = parametro => asigandoParametro = parametro;
console.log(funcionFlecha2("Soy una función flecha 2"));

/*This con función normal*/
const Objeto1 = {
    nombre: "Santiago",
    hablar: function(){console.log( `Hola ${this.nombre}` )}
}
Objeto1.hablar();

/*This con función flecha*/
const Objeto2 = {
    nombre: "Alejandro",
    hablar: ()=>{console.log( `Hola ${this.nombre}` )}
}
window.nombre = "Gonzalez";
Objeto2.hablar();
