const elemento = document.querySelector(".prueba");

/*textContent*/
document.write(`<p><b>textContent: </b> ${elemento.textContent}</p>`);
console.log(elemento.textContent);

/*innerHTML*/
document.write(`<p><b>textContent: </b> ${elemento.innerHTML}</p>`);
console.log(elemento.innerHTML)

/*outerHTML*/
document.write(`<p><b>textContent: </b> ${elemento.outerHTML}</p>`);
console.log(elemento.outerHTML)