const db = require('../services/db.js');
/*En este archivo se encuentras las funciones de js que mandan a ejecutar los querys */



//--funcion para registrar usuario
async function ActualizarVehiculo(Placa, Marca,Modelo,Serie,Color) {
  const result = await db.queryParams(

    `UPDATE  vehiculos SET marca = ?, modelo = ?, serie = ?, color = ? where placa = ?`,
    [Marca, Modelo, Serie, Color, Placa   

    ]
  );



  if (result.affectedRows) {
    message = 'Vehículo actualizado correctamente';
    return { message };
  } else {
    return null
  }


}

//---funcion para obtener todos los usuarios de la bd
async function GetVehiculos() {

  const rows = await db.query(
    `SELECT * from vehiculos`,

  );

  if (!rows) {
    return [];
  }
  return rows;
}





//---funcion para obtener data de un solo vehiculo
async function GetVehiculoUnico(Placa) {

  const rows = await db.queryParams(
    `SELECT * from vehiculos where placa = ?`, [Placa]

  );

  if (!rows) {
    return [];
  }
  return rows[0];
}

//---funcion para obtener data de un solo vehiculo
async function EliminarVehiculo(Placa) {

  const rows = await db.queryParams(
    `delete from vehiculos where placa = ?`, [Placa]

  );

  if (!rows) {
    return [];
  }
  return rows[0];
}





//--funcion para registrar vehiculo
async function NuevoVehiculo(Placa, Marca,Modelo,Serie,Color) {
  const result = await db.queryParams(

    `INSERT INTO vehiculos 
      (placa,marca,modelo,serie,color)
      VALUES 
      (?, ?, ?,?,?)`,
    [Placa,Marca,Modelo,Serie,Color   // el 1 significar rol usuario y se crea con 0 puntos

    ]
  );



  if (result.affectedRows.length!=0) {
    message = 'Vehículo creado correctamente';
    return { message };
  } else {
    return null
  }


}





module.exports = {
  GetVehiculos,
  NuevoVehiculo,
  GetVehiculoUnico,
  ActualizarVehiculo,
  EliminarVehiculo
}