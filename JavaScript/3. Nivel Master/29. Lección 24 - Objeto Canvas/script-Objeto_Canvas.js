"use strict";

const canvas = document.getElementById('canvas');

//Se crea el contexto en el que podamos dibujar graficos.
const ctx = canvas.getContext("2d");


//cambiando color del rectangulo antes de dibujarlo
ctx.strokeStyle = "#09f";

//grosor de la linea del rectangulo
ctx.lineWidth = "6"

//dibujando rectangulo
ctx.strokeRect(30,50,400,200);

//cambiando color del rectangulo relleno antes de dibujarlo
ctx.fillStyle = "#09f";

//dibujando rectangulo relleno
ctx.fillRect(10,20,400,200);

//Dibujando Linea
ctx.lineTo(200, 300);
ctx.lineTo(250, 350);
ctx.stroke();

//Cerrando los primeros puntos para que no se unan con los siguientes:
ctx.closePath()
//Iniciamos un nuevo path para dibujar algo diferente.
ctx.beginPath()

//Uniendo varios puntos.
ctx.lineTo(400, 300);
ctx.lineTo(450, 350);
ctx.lineTo(400, 400);
ctx.lineTo(450, 450);
ctx.stroke();


//EJERCICIO
const canvas_ejercicio = document.getElementById("canvas-ejercicio");
//El getBoundClientRect, nos permitira saber la posición del canvas el viewportr
const dif = canvas_ejercicio.getBoundingClientRect(); 
//Creamos contexto del canvas para dibujar
const ctx_2 = canvas_ejercicio.getContext("2d");

let painting, color, linewidth, difX, difY;

canvas_ejercicio.addEventListener("mousedown", e=>{
    //posición del mouse segun el viewport completo - posición del canvas en el viewport, esto para obtener la posición del mouse en el canvas.
    difX = e.clientX - dif.left; 
    difY = e.clientY - dif.top; //
    console.log("e.clientX", e.clientX)
    console.log("e.clientY", e.clientY)
    console.log("dif.left", dif.left)
    console.log("dif.top", dif.top)
    console.log("difX", difX)
    console.log("difY", difY)
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value;
    ctx_2.beginPath();  //Inicio para pintar.
})
//Pinta cuando se mantiene presionado el mouse y se mueve dentro del canvas
canvas_ejercicio.addEventListener("mousemove", e=>{
    if(painting){
        //Envio posición anterior en la que estaba el mouse y la nueva posición para trazar la linea
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        //Se actualiza los puntos anterior para cuando se mueva el mouse y queramos trazar la nueva linea
        difX = e.clientX - dif.left;
        difY = e.clientY - dif.top;
    }
})
//Cuando se levanta el mouse deja de pintar(painting = false) y se cierra el path
canvas_ejercicio.addEventListener("mouseup",()=>{
    ctx_2.closePath(); 
    painting = false;
})

const dibujar = (x1,y1,x2,y2) =>{
    ctx_2.strokeStyle = color;
    ctx_2.lineWidth = linewidth;
    ctx_2.moveTo(x1, y1); //moveTo pone el path en la posicion que indicamos, osea la anterior en la que estaba.
    ctx_2.lineTo(x2,y2); //pone el punto en la nueva posición
    ctx_2.stroke(); //dibuja la linea
}