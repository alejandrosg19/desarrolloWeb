"use strict";

/*cache.add()*/
caches.open('archivos-cache1').then(cache =>{
    cache.add('Cache.html');
})

/*cache.addAll([])*/
caches.open('archivos-cache2').then(cache =>{
    cache.addAll(['Cache.html','style-Cache.css', 'script-Cache.js']);
})

/*cache.match()*/
caches.open('archivos-cache2').then(cache =>{
    cache.match('Cache.html').then(res =>{
        console.log(res);
    })
})

/*cache.match()*/
caches.open('archivos-cache2').then(cache =>{
    cache.matchAll('Cache.html').then(res =>{
        console.log(res);
    })
})

/*cache.delete()*/
caches.open('archivos-cache2').then(cache =>{
    cache.delete('Cache.html').then(res =>{
        console.log(res);
    });
})

/*cache.keys()*/
caches.open('archivos-cache2').then(cache =>{
    cache.keys().then(res =>{
        console.log(res);
    })
})