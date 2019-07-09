// Requires
var express = require("express");
var mongoose = require("mongoose");

// Inicializar variables
var app = express();

// Conexion a Base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
  if(err) throw err;

  console.log('Base de Datos: \x1b[36m%s\x1b[0m', 'Online');
});

// Rutas y Peticiones
app.get('/', (req, res, next) => {
  res.status(200).json({
    ok: true,
    mensaje: 'Peticion realizada correctamente'
  });
  //res.send("Hola Mundo");
});


// Escuchar Peticiones
app.listen(3000, ()=> {
  console.log('Express server puerto 3000: \x1b[36m%s\x1b[0m', 'Online');
})

