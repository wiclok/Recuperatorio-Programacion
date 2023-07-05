// Imports
const cors = require('cors');
const express = require('express');

const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
