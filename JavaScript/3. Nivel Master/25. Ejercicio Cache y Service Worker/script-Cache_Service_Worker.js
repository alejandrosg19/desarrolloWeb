"use strict";

if(!navigator.serviceWorker){
    console.log('Navegador no posee Service Worker');
}

navigator.serviceWorker.register('sw.js');

navigator.serviceWorker.ready.then(res =>{
    res.active.postMessage('Hola que tal?');
})

navigator.serviceWorker.addEventListener('message', res=>{
    console.log('Recibiendo mensaje en js principal');
    console.log(res.data);
})