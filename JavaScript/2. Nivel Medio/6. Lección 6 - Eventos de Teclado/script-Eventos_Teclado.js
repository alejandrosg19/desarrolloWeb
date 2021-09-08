const input = document.querySelector("input");

/*keydown*/
input.addEventListener("keydown", ()=>{console.log("Una tecla fue presioanda en el elemento")});

/*keypress*/
input.addEventListener("keypress", ()=>{console.log("Una tecla fue presionada y soltada en el elementos")});

/*keyup*/
input.addEventListener("keyup", ()=>{console.log("Una tecla fue soltada en el elemento")});