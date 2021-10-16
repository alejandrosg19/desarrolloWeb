"use strict";

const newFechaUTC = dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24); //dias*milisegundos*segundos*minutos*horas
    return fecha.toUTCString();
}

const crearCookie = (name, dias) =>{
    document.cookie = `${name};expires=${dias}`;
}

crearCookie("usuario=Santiago", "4");

const obtenerCookie = cookieName =>{
    let cookies = document.cookie; //obtenemos keyCooki=valueCOokie;keyCOokie=valueCOokie
    cookies = cookies.split(";");
    for(let i=0; i<cookies.length; i++){
        let cookie = cookies[i].trim();
        if(cookie.startsWith(cookieName)) return cookie.split("=")[1];
    }
    return "No hay cookie con esa key"; //Si no retorna en el if es porque niguna cookie recorrida en el for tiene ese nombre
}


//Ejercicio
if(obtenerCookie("acceptCookie") !== 'SI'){
    const modal = document.querySelector('.bg-modal');
    const buttonAcept = document.querySelector('.acept');
    const buttonDeny = document.querySelector('.deny');
    modal.style.opacity = "1";

    buttonAcept.addEventListener('click', ()=>{
        crearCookie('acceptCookie=SI',30);
        modal.style.opacity = "0";
    })

    buttonDeny.addEventListener('click', ()=>{
        crearCookie('acceptCookie=NO',30);
        modal.style.opacity = "0";
    })
}