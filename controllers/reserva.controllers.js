const ctrlReservas = {};
const Reserva = require('../model/reserva.model');
// ==========================================
//         Rutas renderizar las vistas
// ==========================================

// renderizar la lista de reservas
ctrlReservas.renderListaReservas = (req, res) => {
  res.render('index');
};

// renderizar crear reserva

ctrlReservas.renderCrearReserva = (req, res) => {
  res.render('crearReserva');
};

// renderizar editar reserva

ctrlReservas.renderEditarReserva = (req, res) => {
  const {id} = req.params;
  res.render('editarReserva', {id});
};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas

ctrlReservas.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      where: {
        estado: true,
      },
    });

    return res.json(reservas);
  } catch (error) {
    console.log('Error al obtener las reservas', error);
    return res.status(500).json({
      message: 'Error al obtener las reservas',
    });
  }
};

// Obtener una reserva

ctrlReservas.obtenerReserva = async (req, res) => {
  const {id} = req.params;
  try {
    const reserva = await Reserva.findByPk(id);
    return res.json(reserva);
  } catch (error) {
    console.log('Error al obtener la reserva', error);
    return res.status(500).json({
      message: 'Error al obtener la reserva',
    });
  }
};

// Crear una reserva

ctrlReservas.crearReserva = async (req, res) => {
  const {
    apellido,
    nombre,
    fecha_vuelo,
    telefono,
    email,
    destino,
    cantidad_pasajeros,
    costo_reserva,
  } = req.body;

  try {
    const nuevaReserva = new Reserva({
      apellido,
      nombre,
      fecha_vuelo,
      telefono,
      email,
      destino,
      cantidad_pasajeros,
      costo_reserva,
      codigo: new Date().getTime(),
    });
    await nuevaReserva.save();
    return res.status(201).json({
      message: 'Reserva creada con éxito',
    });
  } catch (error) {
    console.log('Error al crear la reserva: ', error);
    return res.status(500).json({
      message: 'Error al crear la reserva',
    });
  }
};

// Actualizar una reserva

ctrlReservas.actualizarReserva = async (req, res) => {
  try {
    const {id} = req.params;
    const reserva = await Reserva.findByPk(id);
    await reserva.update(req.body);
    return res.json({
      message: 'Reserva actualizada exitosamente',
    });
  } catch (error) {
    console.log('Error al actualizar la reserva', error);
    return res.status(500).json({
      message: 'Error al actualizar la reserva',
    });
  }
};

// Eliminar una reserva de forma lógica

ctrlReservas.eliminarReserva = async (req, res) => {
  const {id} = req.params;
  try {
    const reserva = await Reserva.findByPk(id);
    await reserva.update({estado: false});
    return res.json({message: 'Reserva se eliminó correctamente'});
  } catch (error) {
    console.log('Error al eliminar la reserva', error);
    return res.status(500).json({
      message: 'Error al eliminar la reserva',
    });
  }
};

module.exports = ctrlReservas;
