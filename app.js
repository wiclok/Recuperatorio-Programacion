// Imports
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const app = express();

// testeo de conexion a la base de datos
const {sequelize} = require('./db');

sequelize
  .authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => {
    console.log(err);
    process.exit();
  });

// Middlewares
// TODO: Implementar middlewares

app.use(cors());
// app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
require('ejs');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
