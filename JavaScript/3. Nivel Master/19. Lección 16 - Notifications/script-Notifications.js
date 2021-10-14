"use strict";

if(!('Notification' in window)){
    console.log('Las notificaciones no estan disponibles en tu navegador');
}

Notification.requestPermission(()=>{
    console.log(Notification.permission)
    if(Notification.permission == "granted"){
        console.log('holaaa')
        new Notification('Primera notificación');
    }
})