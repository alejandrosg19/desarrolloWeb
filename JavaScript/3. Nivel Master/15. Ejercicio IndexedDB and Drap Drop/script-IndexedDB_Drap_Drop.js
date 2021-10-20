"use strict";

/*DB*/
const IDBrequest = indexedDB.open("pruebaDB", 1);

IDBrequest.addEventListener("upgradeneeded", ()=>{
    const db = IDBrequest.result

    db.createObjectStore("nombres",{
        autoIncrement: true
    })
})

IDBrequest.addEventListener("success", ()=>{
    leerObjetos();
    console.log("Todo salio correctamente");
})

IDBrequest.addEventListener("error", ()=>{
    console.log("Ocurrio un error")
})


document.getElementById("add").addEventListener("click", ()=>{
    const input = document.getElementById("nombre").value;
    if(input.length > 0){
        if(document.querySelector(".posible") != undefined){
            if(confirm("Hay elementos sin guardar: ¿Quieres continuar?")){
                addObjeto({nombre: input});
                leerObjetos();
            }
        }else{
            addObjeto({nombre: input});
            leerObjetos();
        }
    }
})


const addObjeto = objeto => {
    const IDBData = getIDBData("readwrite", "Objeto agregado correctamente");
    IDBData.add(objeto);
}

const leerObjetos = () => {
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor()
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = ""
    cursor.addEventListener("success", ()=>{
        if(cursor.result){
            console.log(cursor.result.value)
            let elemento = nombresHTML(cursor.result.key, cursor.result.value)
            fragment.appendChild(elemento)
            cursor.result.continue()
        }else document.querySelector(".nombres").appendChild(fragment); //El else siempre se activa, por que el ultimo elemento del curso es null
    })
}

const modificarObjeto = (key, objeto) => {
    const IDBData = getIDBData("readwrite", "Objeto modificado correctamente");
    IDBData.put(objeto, key)
}

const eliminarObjeto = (key) => {
    const IDBData = getIDBData("readwrite", "Objeto eliminado correctamente")
    IDBData.delete(key)
}

const getIDBData = (mode, msj)=>{
    const db = IDBrequest.result;
    const IDBTransaction = db.transaction("nombres", mode);
    const obj_Store = IDBTransaction.objectStore("nombres")
    IDBTransaction.addEventListener("complete", ()=>{
        console.log(msj);
    })
    return obj_Store
}

/*Creación de Elementos nombres*/
const nombresHTML = (id, name) =>{
    const container = document.createElement("div");
    const h2 = document.createElement("h2")
    const options = document.createElement("div")
    const saveButton = document.createElement("button")
    const deleteButton = document.createElement("button")

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";
    
    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spelcheck","false"); // Elimina autocorrector

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup", ()=>{
        saveButton.classList.replace("imposible", "posible");
    })

    saveButton.addEventListener("click", ()=>{
        if(saveButton.className == "posible"){
            modificarObjeto(id, {nombre: h2.textContent});
            saveButton.classList.replace("posible", "imposible");
        }
    })

    deleteButton.addEventListener("click", ()=>{
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;
}
