//EL controlador se encaragar de administrar
//las peticione y repuestas

const {request,response}=require('express')

//importar el servicio
const {insertarUsuario}=require('../services/servicios.js')

//importar el servicio
const {leerUsuario}=require('../services/servicios.js')

//importar el servicio
const {leerUsuarios}=require('../services/servicios.js')

//importar el servicio
const {modificarUsuario}=require('../services/servicios.js')

//importar el servicio
const {borrarUsuario}=require('../services/servicios.js')



//cuales son las operaciones
//que debe realizar mi SERVIDOR
 async function registrarUsuario(peticion=request,respuesta=response){

    //capturo los datos que llegan el cuerpo de la peticion
    let datosCliente=peticion.body;

   try{

   
    await insertarUsuario(datosCliente)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito registrando Usuario"
    })

   }catch(error){

    respuesta.status(400).json({
        estado:false,
        mensaje:"uppsss....."+error

   })
}

}
async function buscarUsuario(peticion=request,respuesta=response){
    //capturr el id del jugador a buscar

    let id=peticion.params.id

    try{

   
        let cliente =await leerUsuario(id)
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

async function buscarUsuarios(peticion=request,respuesta=response){

    try{

   
        let clientes =await leerUsuarios()
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

async function editarUsuario(peticion=request,respuesta=response){

   //recibir los datos del body

   let datos = peticion.body
   let id = peticion.params.id

   try{

   
     await modificarUsuario(id,datos)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito modificando cliente"
    })

   }catch(error){

    respuesta.status(400).json({
        estado:false,
        mensaje:"uppsss....."+error

   })
}

}

async function eliminarUsuario(peticion=request,respuesta=response){

   let id=peticion.params.id

   try{

   
    await borrarUsuario(id)
   respuesta.status(200).json({
       estado:true,
       mensaje:"exito borrando cliente"
   })

  }catch(error){

   respuesta.status(400).json({
       estado:false,
       mensaje:"uppsss....."+error

  })
}

}


module.exports={

    registrarUsuario,
    buscarUsuario,
    buscarUsuarios,
    editarUsuario,
    eliminarUsuario

}

