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


const faltanCargarDatos = ()=>{
    return (isNaN(parseInt(metros2.value))|| selectTipoVivienda.value.trim() == "" || selectZonaVivienda.value.trim()=="")
}

const muestroCotizacion = ()=> {
    let mts = metros2.value
    let zonaViv = selectZonaVivienda.value
    let tipoViv = selectTipoVivienda.value
    let valorDeLaCuota = cotizador.valorDePoliza(mts, zonaViv, tipoViv)
    valorDeLaCuota = valorDeLaCuota.toFixed(2)
    valorCuota.innerText = `$ ${valorDeLaCuota}`
    
    
}

const cotizarSeguroVivienda = ()=> {

faltanCargarDatos() ? alert("Complete todos los datos solicitados") : muestroCotizacion()








//     if (faltanCargarDatos()){
//         alert("Complete todos los datos solicitados")
//     }
    
// else {
//     let mts = metros2.value
//     let zonaViv = selectZonaVivienda.value
//     let tipoViv = selectTipoVivienda.value
//     let valorDeLaCuota = cotizador.valorDePoliza(mts, zonaViv, tipoViv)
//     valorDeLaCuota = valorDeLaCuota.toFixed(2)
//     valorCuota.innerText = `$ ${valorDeLaCuota}`
    
// }

   
}

    // este es el metodo expandido sin simplificar
    // let valorDeLaCuota= cotizador.valorDePoliza(mts,zonaViv,tipoViv)
    // valorCuota.innertext = valorDeLaCuota


// let carrito = []

// function verCarrito() {
//     // if (verCarrito.length === 0){
//     //     console.warn("El carrito esta vacio.")
//     // } 

//     //operador logico and &&
//    let mensaje = carrito.length === 0 && "El carrito esta vacio."
//    console.warn(mensaje)
// }

// // const usuario1 = {
// //     nombre: "John Doe",
// //     edad: 14
// // }

// // const usuario2 = null

// // console.log{usuario1 || "El usuario no existe"}

// // // {    nombre: "John Doe",  edad: 14 }

// // console.log{usuario2 || "El usuario no existe"}

// // //"El usuario no existe"

// function recuperarCarrito() {
//     carrito = JSON.parse(localStorage.getItem("carrito")) || ["ERROR en carrito"]
//     console.log(carrito)
//     for (item of carrito){
//         console.log(item)
//         //cargar en el HTML
//     }
// }