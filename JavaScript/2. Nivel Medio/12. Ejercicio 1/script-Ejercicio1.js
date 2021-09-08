const contentHTML = document.querySelector(".materias");

const materias = [
    {
        "materia": "Calculo 3",
        "nota": "6"
    },
    {
        "materia": "POO",
        "nota": "8"
    },
    {
        "materia": "Ingles",
        "nota": "9"
    },
    {
        "materia": "Fisica 2",
        "nota": "7"
    },
    {
        "materia": "Programación Avanzada",
        "nota": "8"
    },
]

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject)=>{
        if(materias[id] == undefined) reject("Materia no encontrada");
        else setTimeout(()=>{resolve(materias[id])}, Math.random() * 1000);
    })
}

const agregarMateria = async ()=>{
    let materiaHTML;
    try{

        for(let x=0; x<materias.length; x++){
            materiaHTML = await obtenerMateria(10);
            let new_element = `
            <div class="materia">
                <div class="nombre">${materiaHTML.materia}</div>
                <div class="nota">${materiaHTML.nota}</div>
            </div>`
            contentHTML.innerHTML += new_element;
        }
    }
    catch(e){
        console.log(e)
    }
}

agregarMateria()