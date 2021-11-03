//Traigo el metodo router de express para personalizar mis rutas
const { Router }= require('express');



const { registrarUsuario}=require('../controllers/controladorReserva.js')
const { buscarUsuario }=require('../controllers/controladorReserva.js')
const { buscarUsuarios }=require('../controllers/controladorReserva.js')
const { editarUsuario}=require('../controllers/controladorReserva.js')
const { eliminarUsuario }=require('../controllers/controladorReserva.js')

const { registrarHabitacion}=require('../controllers/controladorHabitaciones.js')
const { buscarHabitacion}=require('../controllers/controladorHabitaciones.js')
const { buscarHabitaciones}=require('../controllers/controladorHabitaciones.js')
const { editarHabitacion}=require('../controllers/controladorHabitaciones.js')
const { eliminarHabitacion}=require('../controllers/controladorHabitaciones.js')

//Personalizo mis rutas:
const rutas=Router();

//Listado de rutas

rutas.get('/reserva/clientes',registrarUsuario)
rutas.post('/reserva/nueva',buscarUsuario)
rutas.get('/reserva/nueva',buscarUsuarios)
rutas.put('/reserva/editar/:id',editarUsuario)
rutas.delete('/reserva/eliminar/:id',eliminarUsuario)

rutas.get('/habitaciones/clientes',registrarHabitacion)
rutas.post('/habitaciones/nueva',buscarHabitacion)
rutas.get('/habitaciones/nueva',buscarHabitaciones)
rutas.put('/habitaciones/editar/:id',editarHabitacion)
rutas.delete('/habitaciones/eliminar/:id',eliminarHabitacion)


module.exports=rutas






