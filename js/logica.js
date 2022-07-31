const cotizador = new CotizadorSeguroDeHogar(zonaVivienda, tipoVivienda, costoSeguroM2)

const cargoZonaDeResidencia = ()=> {
      let optionZV
          zonaVivienda.forEach(element => {
            optionZV += `<option value="${element.factor}">${element.area}</option>`
            //aqui estamos declarando que lo que el usuario esta viendo en pantalla como factor se vuelve el valor area en las el sistema de optionZV
          });
          return optionZV

             //llamamos a la funcion for each para tomar de la array las zonas geograficas
    //genera los tab option
}

const cargoTiposDeVivienda = ()=> {
    let optionTV
        tipoVivienda.forEach(element => {
            optionTV += `<option value="${element.factor}">${element.tipo}</option>`
        });
        return optionTV
}

const cotizarSeguroVivienda = ()=> {
    if (metros2.value !== ""){
    let mts = metros2.value
    let zonaViv = selectZonaVivienda.value
    let tipoViv = selectTipoVivienda.value
    let valorDeLaCuota = cotizador.valorDePoliza(mts, zonaViv, tipoViv)
    valorDeLaCuota = valorDeLaCuota.toFixed(2)
    valorCuota.innerText = `$ ${valorDeLaCuota}`
    
}
else {
    alert("Complete todos los datos solicitados")
}

    // este es el metodo expandido sin simplificar
    // let valorDeLaCuota= cotizador.valorDePoliza(mts,zonaViv,tipoViv)
    // valorCuota.innertext = valorDeLaCuota
}
