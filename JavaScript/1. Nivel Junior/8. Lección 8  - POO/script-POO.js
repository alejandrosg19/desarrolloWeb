/**POO*/

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }

    verInfo(){
        console.log(this.info)
    }
}

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza =raza;
    }
    static ladrar(){
        console.log("Perro ladrando: ¡¡GUAU!!")
    }
    ladrar2(){
        console.log("Perro ladrando: ¡¡GUAU!!")
    }

    set setRaza(newRaza){
        this.raza = newRaza;
    }
    get getRaza(){
        return this.raza;
    }
}


/*Probando metodo static de Perro sin instanciar*/
Perro.ladrar();

/*Instancia de la clase*/
const perro = new Perro("perro", 5, "rojo","pitbull");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 2, "verde");

/*Usando metodo get y set*/
perro.setRaza = "Chihuahua"
console.log("La raza del perro es: " + perro.getRaza)

perro.verInfo();
perro.ladrar2();
gato.verInfo();
pajaro.verInfo();