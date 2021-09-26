"use strict";

const position = (pos) => {
    console.log(pos);
}
const error = (err) => console.log(err)
const options = {
    maximunAge: 0,
    timeout: 3000, // 3 segundos
    enableHightAccuracy: true
}

navigator.geolocation.getCurrentPosition(position, error, options);