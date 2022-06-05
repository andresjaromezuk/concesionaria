let concesionaria = require ("./funciones.js")



let accion = process.argv[2]
let parametro1 = process.argv[3]  


switch (accion ) {

    case "listar":
     concesionaria.listar()
    break;

    case "buscar":  
      
        console.log (concesionaria.buscarAuto(parametro1))
        break;
    
     case "vender":
         
         console.log(concesionaria.venderAuto(parametro1))
    break;

    case "mostrarDisponibles":
        console.log(concesionaria.autosParaLaVenta())
    break;

    case "mostrarVendidos":
        console.log (concesionaria.listaDeVentas())
    break;

    case "mostrarVentas":
        console.log(concesionaria.totalDeVentas())
    break

    case "mostrarPosibles":
        let persona = {
            nombre: "Juan",
            capacidadDePagoEnCuotas: parseInt(process.argv[3]),
            capacidadDePagoTotal: parseInt(process.argv[4])
        }

        let mostrar = concesionaria.autosQuePuedeComprar(persona)
       
        console.log (mostrar)
    break
}



