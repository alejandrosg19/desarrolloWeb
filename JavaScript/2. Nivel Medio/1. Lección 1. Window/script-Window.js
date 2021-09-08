/*open()*/
const new_window = window.open("https://www.youtube.com");

/*close()*/
new_window.close();

/*closed*/
let closed_window = new_window.closed;
document.write(`<p>La ventana new_window esta cerrada? <b>${closed_window}</b></p>`);

/*alert()*/
alert("prueba de alert");

/*print()*/
print();

/*promp()*/
let dato = prompt("Escribe alguna cosa");
document.write(`<p>Imprimiendo valor caputarado en el promop: <b>${dato}</b></p>`);

/*PROPIEDADES DE SCREEN Y SCROLL*/
document.write(`<p><b>PROPIEDADES DE SCREEN LEFT</b></p>`);
/*objeto screen*/
let object_screen = window.screen;
console.log(object_screen)

/*screenLeft*/
let screenLeft = window.screenLeft;
document.write(`<p>Imprimiendo valor del screenLeft: <b>${screenLeft}</b></p>`);

/*screenTop*/
let screenTop = window.screenTop;
document.write(`<p>Imprimiendo valor del screenLeft: <b>${screenTop}</b></p>`);

/*scrollX*/
let scrolX = window.scrollX;
document.write(`<p>Scroll en X: <b>${scrolX}</b></p>`);
console.log("Scroll en X:" + scrolX)

/*scrollY*/
let scrolY = window.scrollY;
document.write(`<p>Scroll en Y: <b>${scrolY}</b></p>`);
console.log("Scroll en Y: " + scrolY)

/*scroll() - scrollTo()*/
window.scroll(0,100);