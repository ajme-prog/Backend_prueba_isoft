const express = require("express");
const app = express();
var cors = require('cors')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


  //----importo mis rutas
const endpointvehiculos = require('./routes/routes.js');

app.use('', endpointvehiculos);

  var port = process.env.PORT || 5000;

app.listen(port, () => {
 console.log("Iniciando app de Prueba Técnica  en el puerto 5000");
});