"use strict";

if(! navigator.serviceWorker){
    console.log('Tu navegador no soporta service worker');
}

navigator.serviceWorker.register('sw.js');

navigator.serviceWorker.ready.then(res =>{
    res.active.postMessage('Hola Como Estas?');
})

navigator.serviceWorker.addEventListener('message', e =>{
    console.log('Mensaje recibido del service worker');
    console.log(e.data);
})