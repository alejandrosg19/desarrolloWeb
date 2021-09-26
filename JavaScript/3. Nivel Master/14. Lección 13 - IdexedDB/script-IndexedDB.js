"use strict";

/*Solicitud de creación o apertura de la base de datos.*/
const IDBrequest = indexedDB.open("pruebaDB", 1);

IDBrequest.addEventListener("upgradeneeded", ()=>{
    /*Accedemos a la base de datos*/
    const db = IDBrequest.result;

    /*Creamos el almacen de objetos(tabla) que queramos con autoincremetable*/
    db.createObjectStore("nombres", {
        autoIncrement: true
    })
})

IDBrequest.addEventListener("success", ()=>{
    console.log("Db creada o cargada correctamente");
})

IDBrequest.addEventListener("error", ()=>{
    console.log("Erro al cargar o crear la db"); 
})

const addObjeto = objeto => {
    const db = IDBrequest.result;
    const IDBTransaction = db.transaction("nombres", "readwrite");
    const obj_Store = IDBTransaction.objectStore("nombres")
    obj_Store.add(objeto)

    IDBTransaction.addEventListener("complete", ()=>{
        console.log("Transacción completada");
    })
}

const leerObjetos = () => {
    const db = IDBrequest.result;
    const IDBTransaction = db.transaction("nombres", "readonly");
    const obj_Store = IDBTransaction.objectStore("nombres")
    const cursor = obj_Store.openCursor();

    cursor.addEventListener("success", ()=>{
        if(cursor.result){
            console.log(cursor.result.value)
            cursor.result.continue()
        }
    })
}

const modificarObjeto = (key, objeto) => {
    const db = IDBrequest.result;
    const IDBTransaction = db.transaction("nombres", "readwrite");
    const obj_Store = IDBTransaction.objectStore("nombres")
    obj_Store.put(objeto, key)

    IDBTransaction.addEventListener("complete", ()=>{
        console.log("Objeto modificado correctamente");
    })
}

const eliminarObjeto = (key) => {
    const db = IDBrequest.result;
    const IDBTransaction = db.transaction("nombres", "readwrite");
    const obj_Store = IDBTransaction.objectStore("nombres")
    obj_Store.delete(key)

    IDBTransaction.addEventListener("complete", ()=>{
        console.log("Objeto eliminado correctamente");
    })
}
//addObjeto({nombre: "Santiago"})