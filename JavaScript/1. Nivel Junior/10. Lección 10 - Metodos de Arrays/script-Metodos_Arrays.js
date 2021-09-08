let nombres = ["Santiago", "Alejandro", "Gonzalez", "Piracon"]
console.log(nombres)

/*pop()*/
console.log("pop()")
let resultado = nombres.pop()
console.log(resultado)
console.log(nombres)

/*shift()*/
console.log("shift()")
resultado = nombres.shift()
console.log(resultado)
console.log(nombres)

/*push()*/
console.log("push()")
resultado = nombres.push("Santiago", "Piracon")
console.log(resultado)
console.log(nombres)

/*reverse()*/
console.log("reverse()")
let numeros = [1,2,3,4,5,6];
console.log(numeros)
numeros.reverse()
console.log(numeros)

/*unshift()*/
console.log("unshift()")
console.log(numeros)
numeros.unshift(2, 9,8,7)
console.log(numeros)

/*sort()*/
console.log("sort()")
console.log(numeros)
numeros.sort()
console.log(numeros)

/*splice()*/
console.log("splice()")
console.log(numeros)
numeros.splice(1,3,"SANTIAGO","ALEJANDRO")

/*join()*/
console.log("join()")
console.log(numeros)
resultado = numeros.join(" _ ")
console.log(resultado)

/*slice()*/
console.log("slice()")
console.log(numeros)
resultado = numeros.slice(3, 8)
console.log(resultado)

/*filter()*/
console.log("filter()")
nombres = ["Hola","como","estas","santiago","alejandro","gonzalez","piracon"]
console.log(nombres)
resultado = nombres.filter((nombre) => nombre.length > 5)
console.log(resultado)

/*foreach()*/
console.log("foreach")
nombres = ["Hola","como","estas","santiago","alejandro","gonzalez","piracon"]
console.log(nombres)
nombres.forEach(nombre => console.log(nombre))
