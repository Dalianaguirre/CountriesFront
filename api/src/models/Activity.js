const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('activity', { 
  id: {
    type: DataTypes.UUID,    //*UUID genera un número random único con numeros y letras, que no se repite*
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,        //*allowNull--->permite que esté vacio. En false, no le permito xq es un campo requerido*
    primaryKey: true         //*id de mi tabla*
    },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  difficulty: {
    type: DataTypes.ENUM('1','2','3','4','5'),
    allowNull: true
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true
  },
  season: {
    type: DataTypes.ENUM('Winter', 'Summer', 'Autumn', 'Spring'),
    allowNull: true
  }
});
};
