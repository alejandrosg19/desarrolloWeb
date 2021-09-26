/*Protipos en variables*/
const variable = "Soy un string";
console.log("Imprimiendo variable");
console.log(variable);
console.log("Imprimiendo Prototipo de variable");
console.log(variable.__proto__);
console.log("Imprimiendo Prototipo del prototipo de la variable");
console.log(variable.__proto__.__proto__);

/*Prototipos en funciones*/
const funcion = ()=>{};
console.log("Imprimiendo funcion");
console.log(funcion);
console.log("Imprimiendo Prototipo de funcion");
console.log(funcion.__proto__);
console.log("Imprimiendo metodo prototype");
console.log(funcion.prototype)


/*Prototipos en objetos*/
class NewPrototipo{
    constructor(){}

    hablar(){
        console.log("holaa")
    }
}

const objetoNewProtoripo = new NewPrototipo()
console.log("Imprimiendo objeto");
console.log(objetoNewProtoripo);
console.log("Imprimiendo metodo del objeto");
objetoNewProtoripo.hablar();
console.log("Imprimiendo prototipo del objeto");
console.log(objetoNewProtoripo.__proto__)
console.log("Imprimiendo Prototipo del prototipo del objeto");
console.log(objetoNewProtoripo.__proto__.__proto__);

/*Sobre escribiendo metodo*/
NewPrototipo.hablar = () =>{
    console.log("Sobre escrito el metodo hablar()");
}
console.log("Imprimiendo metodo sobre escrito del objeto");
NewPrototipo.hablar();
console.log("Imprimiendo ahora el metodo pero desde el prototipo");
NewPrototipo.prototype.hablar();
console.log("Modificando metodo pero desde el prototip");
NewPrototipo.prototype.hablar = () =>{
    console.log("Metodo modificado desde el prototipo");
}
console.log("Imprimiendo metodo sobre escrito del objeto desde el objeto normal");
NewPrototipo.hablar();
console.log("Imprimiendo metodo sobre escrito del objeto desde el prototipo");
NewPrototipo.prototype.hablar();
console.log(NewPrototipo.prototype);