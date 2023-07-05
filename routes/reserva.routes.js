// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const {
  renderListaReservas,
  renderCrearReserva,
  renderEditarReserva,
  obtenerReserva,
  obtenerReservas,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require('../controllers/reserva.controllers');

const router = require('express').Router();

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

router.get('/', renderListaReservas);

// Formulario para crear una reserva

router.get('/crearReserva', renderCrearReserva);

// Formulario para actualizar una reserva

router.get('/actualizarReserva/:id', renderEditarReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api', obtenerReservas);

// Obtener una reserva

router.get('/api/:id', obtenerReserva);

// Crear una reserva
router.post('/api/', crearReserva);

// Actualizar una reserva
router.put('/api/:id', actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarReserva);

module.exports = router;
