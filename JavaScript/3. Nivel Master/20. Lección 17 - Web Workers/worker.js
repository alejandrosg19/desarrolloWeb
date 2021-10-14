addEventListener('message', e=>{
    console.log(e.data)
    postMessage('Mensaje recibido, ejecutando while.');
    let contador = 0;
    while(true){
        console.log('si worker' + contador);
    }
})