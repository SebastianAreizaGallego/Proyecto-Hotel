//IMPORTO TRAIGO EXPRESS PARA MI CODIGO (PARA PODERLO USAR)
const express = require('express') 
const cors = require('cors')

//Traer IMPORTAR la conexion
const {conectarBD}= require('../database/conexion.js')

//Traer las RUTAS
const rutas=require('../routes/rutasReservas.js')

class ServidorModelo{

    constructor(){

        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()
        

    }

    despertarServidor(){

        this.app.listen(process.env.PORT,function(){
            console.log("Servidor encendido "+process.env.PORT);
        })

    }

    enrutarPeticiones(){
        
        this.app.use('/',rutas)
         
    }

    despertarBD(){

        conectarBD()

    }

    llamarAuxiliares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

}

module.exports=ServidorModelo