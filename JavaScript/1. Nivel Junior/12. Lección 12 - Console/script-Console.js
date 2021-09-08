/**Funciones de registro*/

/*assert()*/
console.log("assert()")
console.assert(5 > 3) /*No imprime nada*/
console.assert(5 > 10)

/*clear()*/
console.log("clear()")
console.clear()

/*error()*/
console.log("error()")
console.error("Monstrando un error.")

/*info()*/
console.log("info()")
console.info("Monstrando mensaje informativo")

/*log()*/
console.log("log()")
console.log("Monstrabdo mensaje con log()")

/*table()*/
console.log("table()")
console.table([1,2,3,4,5,6,7,"holaaa"])

/*warn()*/
console.log("warn()")
console.warn("probando mensaje con warn()")

/*dir()*/
console.log("die()")
console.dir([1,2,3,4,5,"hola"])

/**Funciones de conteo*/
/*count()*/
console.log("count()")
console.count()
console.count()
console.count()
console.count()
console.count()
console.log("countReset()")
console.countReset()
console.count()

/**Funciones de agrupación*/
/*group() y groupEnd()*/
console.log("Estamos en consola principal")
console.log("group(frutas)")
console.group("frutas")
console.log("Estamos en grupo de Frutas")
console.log("fresa")
console.log("pera")
console.log("naranja")
console.log("group(Nombres)")
console.group("Nombres")
console.log("Estaos en grupo de Nombres")
console.log("Santiago")
console.log("Alejandro")
console.log("Gonzalez")
console.log("groupEndd()")
console.groupEnd()
console.log("Estamos en grupo de Frutas de nuevo")
console.log("groupEnd()")
console.groupEnd()
console.log("Estamos en consola principal de nuevo")

/**Funciones de Temporización*/
/*time(), timeLog(), timeEnd()*/
console.log("time(), timeLog(), timeEnd()")
console.log("time()")
console.time()
console.log("timeLog()")
console.timeLog()
console.log("TimeEnd()")
console.timeEnd()