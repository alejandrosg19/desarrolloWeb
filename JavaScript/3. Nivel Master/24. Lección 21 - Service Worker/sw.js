self.addEventListener('install', e =>{
    console.log('Service Worker Instalandose');
})

self.addEventListener('activate', ()=>{
    console.log('Service Worker Instalado Correctamente');
})

self.addEventListener('error', ()=>{
    console.log('Ocurrio un Error al Instalar el Service Worker');
})

self.addEventListener('message', e =>{
    console.log('Mensaje recibido:');
    console.log(e.data);
    e.source.postMessage('Hola brother');
})