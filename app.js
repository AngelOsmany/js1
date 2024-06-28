const mongoose = require("mongoose")
const url_bd="mongodb://localhost:27017/abarrotes"

mongoose.connect(url_bd)
.then(() => {
    console.log("Jala la conexion")
})
.catch((err) => {
    console.log("No jalo la conexion")
})

const esquema_abarrotes = new mongoose.Schema({
    nombre:{
        type:String
    },
    marca:{
        type:String 
    },
    precio:{
        type:Number
    },
    cantidad:{
        type:Number
    },
    proveedor:{
        type:String
    },
    categoria:{
        type:String
    },
    peso_gramos:{
        type:Number
    }
    
})

const modelo_abarrotes = new mongoose.model("Tabla de datos personales", esquema_abarrotes)
modelo_abarrotes.create({
    nombre:"Arroz",
    marca:"meicana",
    precio:"15",
    cantidad:"1",
    proveedor:"La mexicana",
    categoria:"Comida",
    peso_gramos:"600",
})