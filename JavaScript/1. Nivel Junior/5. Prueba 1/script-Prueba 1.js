let definirCompra = (n)=>{
    let valor = prompt(`${n} por favor ingese el dinero que tiene`)
    let respuesta;
    if(valor >= 0.6 && valor < 1){respuesta = `${n} puedes compara el helado de agua y te sobran: ` + (valor - 0.6)}
    else if(valor >= 1 && valor < 1.6){respuesta = `${n} puedes compara el helado de crema y te sobran: ` + (valor - 1.6)}
    else if(valor >= 1.6 && valor < 1.7){respuesta = `${n} puedes compara el helado de heladix y te sobran: ` + (valor - 1.7)}
    else if(valor >= 1.7 && valor < 1.8){respuesta = `${n} puedes compara el helado de heladovich y te sobran: ` + (valor - 1.8)}
    else if(valor >= 1.8 && valor < 2.9){respuesta = `${n} puedes compara el helado de helardo y te sobran: ` + (valor - 1.8)}
    else if(valor >= 2.9){respuesta = `${n} puedes compara el helado de confites o pote de 1/4kg y te sobran: ` + (valor - 1.8)}
    else respuesta = `${n} no te el alzanca para nada`
    return respuesta
}

alert(definirCompra("Cofla"))
alert(definirCompra("Pedro"))
alert(definirCompra("Roberto"))