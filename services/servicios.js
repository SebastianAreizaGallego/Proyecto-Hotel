//importo modelo de datos

const ReservaModelo = require('../models/ReservaModelo.js')

//servivio para agregar un documento a la bd 

 async function insertarUsuario(datosUsuario){ 

  let usuarioAInsertar= new ReservaModelo(datosUsuario)

  return await usuarioAInsertar.save()

}

//servicio para buscar un  docuemnto de la bd
async function leerUsuario(id){


let usuario= await  ReservaModelo.findById(id);
return usuario

} 

//servicio para buscar todos los documentos
async function leerUsuarios(){

let usuarios=await ReservaModelo.find()
return usuarios

}

//servicio para editar documento
async function modificarUsuario(id,datos){

  return await ReservaModelo.findByIdAndUpdate(id,datos)

}

async function borrarUsuario(id){

  return await ReservaModelo.findOneAndDelete(id)

}



module.exports={
  insertarUsuario,
  leerUsuario,
  leerUsuarios,
  modificarUsuario,
  borrarUsuario
}

