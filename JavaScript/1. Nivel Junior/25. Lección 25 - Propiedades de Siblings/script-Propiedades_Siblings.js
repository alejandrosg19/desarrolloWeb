const elemento = document.querySelector(".Parrafo1")

/*nextSibling Siguiente node hermano*/
console.log("nextSibling Siguiente node hermano")
let respuesta = elemento.nextSibling
console.log(respuesta)

/*previousSibling Anterior node hermano*/
console.log("previousSibling Anterior node hermano")
respuesta = elemento.previousSibling
console.log(respuesta)

/*nextElementSibling Siguiente elemento hermano*/
console.log("nextElementSibling Siguiente elemento hermano")
respuesta = elemento.nextElementSibling
console.log(respuesta)

/*previousElementSibling Anterior elemento hermano*/
console.log("previousElementSibling Anterior elemento hermano")
respuesta = elemento.previousElementSibling
console.log(respuesta)
