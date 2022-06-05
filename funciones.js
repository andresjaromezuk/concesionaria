/* Podríamos tener un objeto literal que represente a la concesionaria con los autos 
que creamos y que esta tenga las funcionalidades de buscar por patente y marcar como vendido un auto. */

let autos = require ("./módulo.js")


let concesionaria = {
    
    autos: autos,

    listar: function (){
        let autos = this.autos
        autos.forEach(function(auto) {
            console.log(auto)
        })
    },
    
    buscarAuto: function (patente){
        let autos = this.autos
        let autoBuscado = null
        autos.forEach(function (auto) {
            auto.patente === patente
                autoBuscado = auto
            
        })
        return autoBuscado
    },

    venderAuto: function (patente){
        let autoDisponible = this.buscarAuto(patente)
        autoDisponible.vendido = true 
        return autoDisponible
        
    },

    autosParaLaVenta: function (){
        let autos = this.autos
        return autos.filter(function (auto) {
            return auto.vendido === false
        })
    },

    autosNuevos: function(){
        let autosDisponibles = this.autosParaLaVenta()
        return autosDisponibles.filter(function(auto){
            return auto.km < 100
        })

    },
    
    listaDeVentas: function (){
        let listaVentas = []
        let autos = this.autos
        let precios = autos.forEach(function (auto) {
            if (auto.vendido === true) {
                listaVentas.push (auto.precio)
            }
        })
        return listaVentas
        

    },

    totalDeVentas: function (){
        let listaDeVentas = this.listaDeVentas()
        if (listaDeVentas > 0) {
        return listaDeVentas.reduce(function (venta, precio) {
            return venta + precio
        })} else {
            return 0
        }
        
    },

    puedeComprar: function(auto, persona){
            if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas )){
                return true
            } else {
                return false
            }
        },

        autosQuePuedeComprar: function (persona){
            let disponibles = this.autosParaLaVenta()
            return disponibles.filter (function (auto){ 
                       return persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas )
                    
                  }) 

        }
         
        
    }
   
module.exports = concesionaria



/*let filtro = concesionaria.buscarAuto()

let vender = concesionaria.venderAuto()

let disponibles = concesionaria.autosParaLaVenta()

let nuevos = concesionaria.autosNuevos()

let listaDeVentas= concesionaria.listaDeVentas()*/

//let ventas = concesionaria.totalDeVentas()



//let compra = concesionaria.puedeComprar(auto, persona)

//let puedeComprar = concesionaria.autosQuePuedeComprar(persona)



