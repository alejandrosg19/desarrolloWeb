/*getAttribute()*/
const input = document.querySelector(".Elemento");
document.write(`<p><b>getAttribute(): </b> ${input.getAttribute("type")}</p>`);

/*setAttribute()*/
const input2 = document.getElementById("input2");
input2.setAttribute("type", "range");
document.write(`<p><b>getAttribute(): </b> ${input2.getAttribute("type")}</p>`);

/*setAttribute()*/
const input3 = document.getElementById("input3");
input3.removeAttribute("type");
document.write(`<p><b>getAttribute(): </b> ${input3.getAttribute("type")}</p>`);

