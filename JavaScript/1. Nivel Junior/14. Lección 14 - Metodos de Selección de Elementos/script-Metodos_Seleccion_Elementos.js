/*getElementById()*/
console.log("getElementById()");
let resultado = document.getElementById("parrafo1");
console.log(resultado);

/*getElementsTagName()*/
console.log("getElementsByTagName()");
resultado = document.getElementsByTagName("p");
console.log(resultado);

/*querySelection() con id .*/
console.log("querySelection() con id.");
resultado = document.querySelector("#parrafo1");
console.log(resultado);

/*querySelection() con class #*/
console.log("querySelection() con class #");
resultado = document.querySelector(".parrafo");
console.log(resultado);

/*querySelectionAll() con class #*/
console.log("querySelectionAll() con class #");
resultado = document.querySelectorAll(".parrafo");
console.log(resultado);
