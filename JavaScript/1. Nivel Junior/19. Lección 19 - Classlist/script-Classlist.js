
const elemento = document.querySelector(".titulo");
document.write(`<p>Obteniendo las clases del elemento h3: <b>${elemento.getAttribute("class")}</b></p>`);

/*add()*/
document.write("<p><b><i>Agregando clase prueba</i></b></p>")
elemento.classList.add("prueba");
document.write(`<p>Obteniendo las clases del elemento h3: <b>${elemento.getAttribute("class")}</b></p>`);

/*remove()*/
document.write("<p><b><i>Eliminando clase prueba</i></b></p>")
elemento.classList.remove("prueba");
document.write(`<p>Obteniendo las clases del elemento h3: <b>${elemento.getAttribute("class")}</b></p>`);

/*item()*/
document.write("<p><b><i>Obteniendo clase 0 del elemento</i></b></p>")
const claseElemento = elemento.classList.item(0);
document.write(`<p>La clase 0 del elemento es: <b>${claseElemento}</b></p>`);

/*contains()*/
document.write("<p><b><i>Validando si el elemento posee la clase titulo</i></b></p>")
const validClasss = elemento.classList.contains("titulo");
document.write(`<p>El elemento posee la clase titulo? : <b>${validClasss}</b></p>`);

/*toggle()*/
document.write("<p><b><i>Validando si el elemento posee la clase addd, si la tiene la elimina</i></b></p>")
document.write(`<p>Obteniendo las clases del elemento h3: <b>${elemento.getAttribute("class")}</b></p>`);
elemento.classList.toggle("addd");
document.write(`<p>Obteniendo las clases del elemento h3: <b>${elemento.getAttribute("class")}</b></p>`);

/*replace()*/
document.write("<p><b><i>Remplazando clase remove por prueba</i></b></p>")
document.write(`<p>Obteniendo las clases del elemento h3: <b>${elemento.getAttribute("class")}</b></p>`);
elemento.classList.replace("remove","prueba");
document.write(`<p>Obteniendo las clases del elemento h3: <b>${elemento.getAttribute("class")}</b></p>`);

