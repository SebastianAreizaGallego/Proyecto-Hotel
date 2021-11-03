//EL controlador se encaragar de administrar
//las peticione y repuestas

const {request,response}=require('express')

//importar el servicio
const {insertarHabitacion}=require('../services/servicios.js')

//importar el servicio
const {leerHabitacion}=require('../services/servicios.js')

//importar el servicio
const {leerHabitaciones}=require('../services/servicios.js')



//importar el servicio
const {modificarHabitacion}=require('../services/servicios.js')

//importar el servicio
const {borrarHabitacion}=require('../services/servicios.js')



//cuales son las operaciones
//que debe realizar mi SERVIDOR
 async function registrarHabitacion(peticion=request,respuesta=response){

    //capturo los datos que llegan el cuerpo de la peticion
    let datosHabitacion=peticion.body;

   try{

   
    await insertarHabitacion(datosHabitacion)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito registrando Habitacion"
    })

   }catch(error){

    respuesta.status(400).json({
        estado:false,
        mensaje:"uppsss....."+error

   })
}

}
async function buscarHabitacion(peticion=request,respuesta=response){
    //capturr el id del jugador a buscar

    let id=peticion.params.id

    try{

   
        let cliente =await leerHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            datos:cliente
        })
    
       }catch(error){
    
        respuesta.status(400).json({
            estado:false,
            mensaje:"uppsss....."+error
    
       })
    }
    

}

async function buscarHabitaciones(peticion=request,respuesta=response){

    try{

   
        let clientes =await leerHabitaciones()
        respuesta.status(200).json({
            estado:true,
            datos:clientes
        })
    
       }catch(error){
    
        respuesta.status(400).json({
            estado:false,
            mensaje:"uppsss....."+error
    
       })
    }
   
}

async function editarHabitacion(peticion=request,respuesta=response){

   //recibir los datos del body

   let datos = peticion.body
   let id = peticion.params.id

   try{

   
     await modificarHabitacion(id,datos)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito modificando Habitacion"
    })

   }catch(error){

    respuesta.status(400).json({
        estado:false,
        mensaje:"uppsss....."+error

   })
}

}

async function eliminarHabitacion(peticion=request,respuesta=response){

   let id=peticion.params.id

   try{

   
    await borrarHabitacion(id)
   respuesta.status(200).json({
       estado:true,
       mensaje:"exito borrando Habitacion"
   })

  }catch(error){

   respuesta.status(400).json({
       estado:false,
       mensaje:"uppsss....."+error

  })
}

}


module.exports={

    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion

}

