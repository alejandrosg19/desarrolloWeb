"use strict";

const anchoTotal = screen.width;
const altoTotal = screen.height;

const anchoDisponible = screen.availWidth;
const altoDisponible = screen.availHeight;

const resolucion = screen.pixelDepth;
const profundiad = screen.colorDepth;

console.log('width: ', anchoTotal);
console.log('heigth: ', altoTotal);
console.log('availWidth: ', anchoDisponible);
console.log('availHeigth: ', altoDisponible);
console.log('pixelDepth: ', resolucion);
console.log('colorDepth: ', profundiad);