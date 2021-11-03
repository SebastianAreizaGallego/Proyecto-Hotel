//importo modelo de datos

const HabitacionModelo = require('../models/HabitacionModelo.js')

//servivio para agregar un documento a la bd 

 async function insertarHabitacion(datosHabitacion){ 

  let HabitacionAInsertar= new HabitacionModelo(datosHabitacion)

  return await HabitacionAInsertar.save()

}

//servicio para buscar un  docuemnto de la bd
async function leerHabitacion(id){


let habitacion= await  HabitacionModelo.findById(id);
return habitacion

} 

//servicio para buscar todos los documentos
async function leerHabitaciones(){

let habitaciones=await HabitacionModelo.find()
return habitaciones

}

//servicio para editar documento
async function modificarHabitacion(id,datos){

  return await HabitacionModelo.findByIdAndUpdate(id,datos)

}

async function borrarHabitacion(id){

  return await HabitacionModelo.findOneAndDelete(id)

}



module.exports={
  insertarHabitacion,
  leerHabitacion,
  leerHabitaciones,
  modificarHabitacion,
  borrarHabitacion
}

