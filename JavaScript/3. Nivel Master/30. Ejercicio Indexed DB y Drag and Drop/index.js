"use strict";

const dbRequest = indexedDB.open("nombres", 1);

dbRequest.addEventListener("upgradeneeded", ()=>{
    const db = dbRequest.result;
    
    db.createObjectStore("nombres", {
        autoIncrement: true
    });
})
dbRequest.addEventListener("error", ()=>{
    console.log("Ha ocurrido un error en la creación de la base datos");
})
dbRequest.addEventListener("success", ()=>{
    obtener(); //Crea todos los elementos en la tabla
    drag_and_drop(); //Actualiza a todos los elementos disponibles con los eventos de drag and drop
    console.log("Base de datos creada correctamente");
})

const container = document.querySelector(".Elementos");


const obtener = ()=>{
    const obj_objectStore = obj_db("readonly", "Obteniendo elementos");
    const cursor = obj_objectStore.openCursor();
    const fragment = document.createDocumentFragment();

    cursor.addEventListener("success", ()=>{
        if(cursor.result){
            const new_element = agregarElementoHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(new_element)
            cursor.result.continue();
        }else container.appendChild(fragment)
    })
}
const agregar = object=>{
    const obj_objectStore = obj_db("readwrite", "Elemento agregado correctamente");
    obj_objectStore.add(object);
}
const actualizar = (key, object)=>{
    const obj_objectStore = obj_db("readwrite", "Elemento actualizado correctamente");
    obj_objectStore.put(object, key);
}
const eliminar = key =>{
    console.log("eliminar", key);
    const obj_objectStore = obj_db("readwrite", "Elemento eliminado correctamente");
    obj_objectStore.delete(key);
}
// const find = async key=>{
//     const obj_objectStore = obj_db("readonly", "Obteniendo elementos");
//     // const cursor = obj_objectStore.openCursor();
//     // const fragment = document.createDocumentFragment();
//     // let result = "ey";
//     // cursor.addEventListener("success", ()=>{
//     //     if(cursor.result){
//     //         if(cursor.result.key == key){
//     //             result = cursor.result;
//     //         }
//     //         console.log(result)
//     //         cursor.result.continue();
//     //     }else container.appendChild(fragment)
//     // })
//     // console.log(result);
//     return await objectStore.get()
// }
const obj_db = (funcion, msj)=>{
    const db = dbRequest.result;
    const obj_transaction = db.transaction(["nombres"], funcion);
    const obj_objectStore = obj_transaction.objectStore("nombres");
    obj_transaction.addEventListener("complete", e=>{
        console.log(msj)
    })
    return obj_objectStore
}

/*Creando Elementos*/
const agregarElementoHTML = (key, value)=>{
    const container = document.createElement('div');
    const input = document.createElement('input');
    const span_actualizar = document.createElement('span');
    const span_eliminar = document.createElement('span');
    const button_actualizar = document.createElement('button');
    const button_eliminar = document.createElement('button');

    container.classList.add('container__info');
    button_actualizar.classList.add('btn-actualizar-disabled');
    button_eliminar.classList.add('btn-eliminar');

    input.value = value.nombre;
    input.id = 'input' + key;
    span_actualizar.textContent = "Actualizar";
    span_eliminar.textContent = "Eliminar";

    button_actualizar.appendChild(span_actualizar);
    button_eliminar.appendChild(span_eliminar);
    container.appendChild(input);
    container.appendChild(button_actualizar);
    container.appendChild(button_eliminar);
    
    input.addEventListener('keyup', ()=>{
        button_actualizar.classList.replace('btn-actualizar-disabled', 'btn-actualizar')
    })

    button_actualizar.addEventListener("click", ()=>{
        const value_input = document.getElementById('input'+key);
        actualizar(key, {"nombre": value_input.value})
        button_actualizar.classList.replace('btn-actualizar', 'btn-actualizar-disabled');
    })
    button_eliminar.addEventListener("click", ()=>{
        eliminar(key);
        limpiar();
    })
    return container
}

const limpiar = ()=>{
    container.innerHTML = "";
    obtener();
}

let array_inputs;
//boton agregar
document.getElementById("btn-agregar").addEventListener("click", ()=>{
    const nombre = document.getElementById("agregar");
    if(nombre.value){
        agregar({"nombre": nombre.value});
        nombre.value = "";
        limpiar();
        drag_and_drop();
    }
})

//Drag and Drop
const drag_and_drop = ()=>{
    setTimeout(() => {
        array_inputs = document.querySelectorAll(".container__info input");
        array_inputs.forEach(value=>{
            value.addEventListener("dragstart", e=>{
                let id_input = value.id.split("input")[1];
                console.log("eyyy", id_input)
                e.dataTransfer.setData("key", id_input);
            });
        })
    
        const imagen = document.querySelector(".container-image")
    
        imagen.addEventListener("dragover", e=>{
            e.preventDefault();
        });
        imagen.addEventListener("drop", e=>{
            e.preventDefault();
            let key = e.dataTransfer.getData("key");
            console.log("Estoy en drop", key);
            eliminar(parseInt(key));
            limpiar();
        });
    }, 1000);
}

// const loading_event_drag = ()=>{
//     setTimeout(() => {
//         array_inputs = document.querySelectorAll(".container__info input");
//         array_inputs.forEach(value=>{
//             value.addEventListener("dragstart", e=>{
//                 let id_input = value.id.split("input")[1];
//                 console.log("eyyy", id_input)
//                 e.dataTransfer.setData("key", id_input);
//             });
//         })
//     }, 1000);
// }

// const loading_event_drop = ()=>{
//     const imagen = document.querySelector(".container-image")

//     imagen.addEventListener("dragover", e=>{
//         e.preventDefault();
//     });
//     imagen.addEventListener("drop", e=>{
//         e.preventDefault();
//         let key = e.dataTransfer.getData("key");
//         console.log("Estoy en drop", key);
//         eliminar(parseInt(key));
//         limpiar();
//     });
// }
