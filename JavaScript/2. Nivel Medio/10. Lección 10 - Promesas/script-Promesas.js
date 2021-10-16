/*Ejemplo de promesa*/
const nombre = "Diego";

const promesa = new Promise((resolve, reject)=>{
    if(nombre!="Diego") reject("Lo siento, el nombre es Diego");
    else resolve(nombre)
});

promesa.then((nombre)=>{
    console.log(nombre)
}).catch((e)=>{
    console.log("Error: " + e);
});

/*Ejercicio*/

class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram
    }
}

const personas = [
    ["Santiago", "@Santiago"],
    ["Alejandro", "@Alejandro"],
    ["Gonzalez", "@Gonzalez"],
    ["Piracon", "@Piracon"],
    ["Valeria"]
]

const arrayPersonas = []

for(let x=0; x<personas.length; x++){
    arrayPersonas[x] = new Persona(personas[x][0], personas[x][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((res, rej)=>{
        if (arrayPersonas[id] == undefined) rej("No se encontro la persona con ese Id");
        else res(arrayPersonas[id]);
    })
}

const obtenerInstagram = (id)=>{
    return new Promise((res, rej)=>{
        if(arrayPersonas[id].instagram == undefined) rej("Persona no tiene instagram");
        else res(arrayPersonas[id].instagram)
    })
}

const id = 4;

obtenerPersona(id).then((persona)=>{ //then de primerea promesa 
    console.log(persona.nombre) 
    return obtenerInstagram(id); //retorna otra promesa que ya tiene su then.
}).then((instagram)=>{ //then de segunda promesa.
    console.log(instagram)
}).catch((e)=>{ //error de cualquier promesa se alamacena aca.
    console.log("ERROR: " + e);
})
