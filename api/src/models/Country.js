const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('country', {
  id: {
    type: DataTypes.STRING(3),
    //unique: true,                     redundante
    //allowNull: false,                 redundante
    primaryKey: true,               // id de mi tabla country
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flag: {
    type: DataTypes.STRING,
    allowNull: false
  },
  continent: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capital: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subregion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: true
  }, 
  population: {
    type: DataTypes.NUMERIC,
    allowNull: true
  },
  createdInDb: {                 //*creado en bd.* llamado a solo lo que está en bd
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
});
};
