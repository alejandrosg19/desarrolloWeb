/*array -> key sin comillas*/
const array = {
    nombre: "Santiago",
    apellido: "Gonzalez"
}

/*objeto JSON -> key con comillas*/
const json = {
    "nombre": "Santiago",
    "apellido": "Gonzalez"
}

/*Serializacion y Deserialización*/
const object_JSON = {
    "Nombre": "Santiago",
    "Apellido": "Gonzalez",
    "Edad": "23"
}

/*serilizando objeto JSON*/
const object_JSON_Serializer = JSON.stringify(object_JSON);
console.log(typeof object_JSON_Serializer);
console.log(object_JSON_Serializer);

/*deserializando objeto JSON*/
const object_JSON_Deserializer = JSON.parse(object_JSON_Serializer);
console.log(typeof object_JSON_Deserializer);
console.log(object_JSON_Deserializer);
