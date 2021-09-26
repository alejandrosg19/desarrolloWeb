"use strict";

/**LocalStorage*/
console.log("OBJETO LOCALSTORAGE")
console.log(localStorage)

/*setItem()*/
console.log("CARGANDO DOS VARIABLES EN LOCALSTORAGE")
localStorage.setItem("nombre", "Santiago")
localStorage.setItem("apellido", "Gonzalez")

/*getItem()*/
console.log("DEVOLVIENDO EL VALOR DE LAS DOS VARIABLES EN LOCALSTORAGE")
console.log(localStorage.getItem("nombre"))
console.log(localStorage.getItem("apellido"))

/*removeItem()*/
console.log("ELIMINANDO UNA VARIABLE DEL LOCALSTORAGE")
console.log(localStorage.getItem("apellido"))

/**SessionStorage*/
console.log("OBJETO SESSIONTORAGE")
console.log(sessionStorage)

/*setItem()*/
console.log("CARGANDO DOS VARIABLES EN SESSIONTORAGE")
sessionStorage.setItem("edad", "23")
sessionStorage.setItem("ciudad", "Bogota")

/*getItem()*/
console.log("DEVOLVIENDO EL VALOR DE LAS DOS VARIABLES EN SESSIONTORAGE")
console.log(sessionStorage.getItem("edad"))
console.log(sessionStorage.getItem("ciudad"))

/*removeItem()*/
console.log("ELIMINANDO UNA VARIABLE DEL SESSIONTORAGE")
console.log(sessionStorage.getItem("edad"))