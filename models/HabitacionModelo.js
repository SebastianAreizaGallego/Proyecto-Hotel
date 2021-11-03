//Traigo de mongoose el modelo y el schema de datos
const{model, Schema}=require('mongoose');

//Creo el esqueleto de datos que va a tener cada documento(bolsa) de mi colección
const HabitacionModelo=Schema({

    nombreCliente:{
        type:String,
        required:true
    },
    apellidoCliente:{
        type:String,
        required:true
    },
    telefonoCliente:{
        type:Number,
        required:true
    },
     numeroDeHabitacion:{
        type:Number,
        required:true

    }
    


});

module.exports=model('habitaciones',HabitacionModelo);