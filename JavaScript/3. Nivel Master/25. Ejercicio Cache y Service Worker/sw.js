
let version = "version 1";

self.addEventListener('install', ()=>{
    console.log('instalando service worker');
    caches.open(version).then(cache => {
        cache.add('Cache_Service_Worker.html').then(res =>{
            console.log('información cacheada');
        }).catch(error =>{
            console.log(error)
        })
    })
})

self.addEventListener('activate', ()=>{
    console.log('Service Worker esta activo');
    caches.keys().then(arrayCaches =>{
        return Promise.all(
            arrayCaches.map(cache =>{
                if(cache !== version){
                    console.log('Cache antiguo, eliminado');
                    return caches.delete(cache) //Elimina las otras versiones que se han diferente a la que tiene la variable version.
                }
            })
        )
    })
})

// El serice worker intercepta todas las peticiones, por lo que cuando se envia una peticion al servidor web pero valida si la peticion que 
//se esta buscando para cargar el archivo ya existe en cache, si es asi, lo devuelve si no, continua con la petición al servidor.
self.addEventListener('fetch', e=>{
    e.respondWidth(async ()=>{
        const respuestaEnCache = await caches.match(e.request); // Busca en cache el elemento devuelto 
        if(respuestaEnCache) return respuestaEnCache; // si tiene algo o retornamos
        return e.request; // si no tiene nada en cache retornamos la solicitud principal que esta con conexion a internet
    })
})
self.addEventListener('error', error=>{
    console.log('Erro al instalar el service worker', error);
})

self.addEventListener('message', res =>{
    console.log('Mensaje recibido en service worker');
    console.log(res.data);
    res.source.postMessage('Que mas bro?');
})