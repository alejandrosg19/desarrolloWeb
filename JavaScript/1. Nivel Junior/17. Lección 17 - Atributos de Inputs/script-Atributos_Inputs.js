/*className*/
const clas = document.querySelector(".class")
document.write(`<p>Imprimiendo el valor de la clase del primer input: <b>${clas.className}</b></p>`)

/*value*/
const value = document.querySelector(".value")
value.value = "666"
document.write(`<p>Imprimiendo el value del segundo input: <b>${value.value}</b></p>`)

/*type*/
const type = document.querySelector(".type")
type.type = "color"
document.write(`<p>Imprimiendo el tipo del tercer input: <b>${type.type}</b></p>`)

/*accept*/
const accept = document.querySelector(".accept")
accept.accept = "image/png"
document.write(`<p>Imprimiendo el tipo del tercer input: <b>${accept.accept}</b></p>`)

/*minlength*/
const minlength = document.querySelector(".minlength")
minlength.minLength = 4
document.write(`<p>Imprimiendo el minlegth del octavo input: <b>${minlength.minLength}</b></p>`)

/*placeholder*/
const placeholder = document.querySelector(".placeholder")
placeholder.placeholder = "Esto es un placeholder"
document.write(`<p>Imprimiendo el placeholder del noveno input: <b>${placeholder.placeholder}</b></p>`)

/*required*/
const required = document.querySelector(".required")
required.required = true
document.write(`<p>Imprimiendo el required del decimo input: <b>${required.required}</b></p>`)