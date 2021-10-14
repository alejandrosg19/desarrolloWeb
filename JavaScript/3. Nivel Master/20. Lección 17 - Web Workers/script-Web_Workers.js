"use strict";

/*No worker*/
const noWorker = ()=>{
    console.log('no worker')
    let contador = 0;
    while(true){
        console.log('no worker' + contador);
    }
}

document.querySelector(".noWorker-button").addEventListener('click', noWorker);

/*Worker*/
const obj_worker = new Worker('worker.js');

const siWorker = ()=>{
    obj_worker.postMessage('Enviando mensaje a worker');
}

obj_worker.addEventListener('message', e=>{
    console.log(e.data);
    console.log('El worker ya se esta ejecutando')
    Worker.terminate()
})

document.querySelector('.worker-button').addEventListener('click', siWorker)

