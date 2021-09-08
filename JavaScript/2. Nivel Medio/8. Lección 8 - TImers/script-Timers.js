const contenedor = document.querySelector(".contenedor");

/*setTimeout()*/
const new_element = document.createElement("P");
new_element.textContent = "Probando setTimeout()";

const setTime = setTimeout(()=>{
    contenedor.appendChild(new_element);
}, 2000);

/*clearTimeout()*/
setTimeout(()=>{
    clearTimeout(setTime);
}, 3000);


/*setInterval()*/
const setinterval = setInterval(()=>{
    const new_element2 = document.createElement("P");
    new_element2.innerHTML = "Probando setInterval() <br>";
    contenedor.appendChild(new_element2);
}, 2000);

/*clearInterval()*/
setTimeout(()=>{
    clearInterval(setinterval);
}, 9000);
