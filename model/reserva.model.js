const {sequelize, DataTypes} = require('../db');

const Reserva = sequelize.define(
  'Reserva',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_vuelo: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cantidad_pasajeros: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    costo_reserva: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    deletedAt: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservas',
  }
);

Reserva.sync({force: false}).then(() => {
  console.log('Tabla de Reservas creada');
});

module.exports = Reserva;
