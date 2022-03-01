const express = require('express');
const router = express.Router();
const programacion = require('../services/programacion.js');




//Obtener todos los usuarios
router.get('/GetVehiculos', async function (req, res) {
    try {
        let vehiculos= await programacion.GetVehiculos();
        res.json({vehiculos:vehiculos, status:200});
    } catch (err) {
        console.error(`Error al obtener todos los vehiculos `, err.message);
        res.json({data:"Error",status:500});
    }
});



//Endpoint para registro de Premios
router.post('/NuevoVehiculo', async function (req, res) {
    // console.log("telefono es "+req.body.telefono + " password es "+req.body.password)
     try {
         let respuesta = await programacion.NuevoVehiculo(req.body.placa,req.body.marca,req.body.modelo,req.body.serie,req.body.color);
 
         if (respuesta === null) { //si devuelvo null es porque no encontre ningun usuario con ese correo
           
             res.json({mensaje:"Error al registrar el vehiculo",status:400});  //status 400 solicitud defectuosa, credenciales incorrectas
          
         } else {
             res.json({data:respuesta,status:200});
         }
     } catch (err) {
         console.error(`Error al registrar el premio `, err.message);
         res.json({data:"Error",status:500});
     }
 });
 

//Endpoint para registro de usuarios
router.put('/ActualizarVehiculo', async function (req, res) {
    try {
        let respuesta = await programacion.ActualizarVehiculo(req.body.placa,req.body.marca,req.body.modelo,req.body.serie,req.body.color);

        if (respuesta === null) { //si devuelvo null es porque no encontre ningun usuario con ese correo
          
            res.json({mensaje:"Error al actualizar el vehículo",status:400});  //status 400 solicitud defectuosa, credenciales incorrectas
         
        } else {
            res.json({data:respuesta,status:200});
        }
    } catch (err) {
        console.error(`Error al actualizar el vehículo`, err.message);
        res.json({data:"Error",status:500});
    }
});




//Obtener un vehiculo
router.get('/GetVehiculoUnico/:placa', async function (req, res) {
    try {
        let vehiculo= await programacion.GetVehiculoUnico(req.params.placa);
        res.json({vehiculo:vehiculo, status:200});
    } catch (err) {
        console.error(`Error al obtener los datos del vehiculo `, err.message);
        res.json({data:"Error",status:500});
    }
});


//Obtener todos los usuarios
router.delete('/EliminarVehiculo/:placa', async function (req, res) {
    try {
        let vehiculo= await programacion.EliminarVehiculo(req.params.placa);
        res.json({vehiculo:vehiculo, status:200});
    } catch (err) {
        console.error(`Error al eliminar el vehiculo `, err.message);
        res.json({data:"Error",status:500});
    }
});


module.exports = router;