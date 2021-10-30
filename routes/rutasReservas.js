//Traigo el metodo router de express para personalizar mis rutas
const { Router }= require('express');



const { registrarUsuario}=require('../controllers/controladorReserva.js')
const { buscarUsuario }=require('../controllers/controladorReserva.js')
const { buscarUsuarios }=require('../controllers/controladorReserva.js')
const { editarUsuario}=require('../controllers/controladorReserva.js')
const { eliminarUsuario }=require('../controllers/controladorReserva.js')


//Personalizo mis rutas:
const rutas=Router();

//Listado de rutas

//no me quier conectar con las rutas a la bd
rutas.get('/reserva/clientes/:id',registrarUsuario)
rutas.post('/reserva/nueva',buscarUsuario)
rutas.get('/reserva/nueva',buscarUsuarios)
rutas.put('/reserva/editar/:id',editarUsuario)
rutas.delete('/reserva/eliminar/:id',eliminarUsuario)


module.exports=rutas






