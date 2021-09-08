/*Prueba de callback con funciones normales.*/
function prueba(callback){
    callback("Santiago");
}
function imprimirNombre(nombre){
    document.write(`<p>Ejecutando primer ejemplo de callback... imprimiendo nombre: ${nombre}</p>`);
}
prueba(imprimirNombre);

/*Prueba2 de callbacks con funciones normales*/
function prueba2(callback){
    callback("Alejandro")
}
prueba2(function imprimirNombre2(nombre){
    document.write(`<p>Ejecutando segundp ejemplo de callback... imprimiendo nombre: ${nombre}</p>`);
});

/*Prueba con función flecha*/
function prueba3(callback){
    callback("Gonzalez")
}
prueba3(nombre=>document.write(`<p>Ejecutando tercer ejemplo de callback... imprimiendo nombre: ${nombre}</p>`))


/*Ejercicio*/
class Persona{
    constructor(nombre=null, instagram=null){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ["Santiago", "@santiago"],
    ["Alejandro", "@alejandro"],
    ["Gonzalaez", "@gonzalez"],
    ["Piracon", "@piracon"],
    ["Daniela"]
]

const arrayPersonas = [];

for(let i=0; i<data.length; i++){
    arrayPersonas[i] = new Persona(data[i][0], data[i][1]);
}

const validarPersona = (id, cb)=>{
    if (arrayPersonas[id] == undefined) cb("No se encontro el id de la persona");
    else cb(null, arrayPersonas[id]);
}

const validarInstagram = (persona, cb)=>{
    if (persona.instagram == null) cb("Persona no tiene instagram");
    else cb(null, persona);
}

validarPersona(4, (error, persona)=>{
    if (error != null) console.log(error);
    else{
        console.log(persona.nombre)
        validarInstagram(persona, (error, persona)=>{
            if (error != null) console.log(error);
            else console.log(persona.instagram)
        })
    }
})
