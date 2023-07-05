const formNuevaReserva = document.querySelector('#formNuevaReserva');

formNuevaReserva.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const fecha_vuelo = document.querySelector('#fecha_vuelo').value;
  const cantidad_pasajeros = document.querySelector(
    '#cantidad_pasajeros'
  ).value;
  const telefono = document.querySelector('#telefono').value;
  const email = document.querySelector('#email').value;
  const costo_reserva = document.querySelector('#costo_reserva').value;
  const destino = document.querySelector('#destino').value;

  const reserva = {
    nombre,
    apellido,
    fecha_vuelo,
    cantidad_pasajeros,
    telefono,
    email,
    costo_reserva,
    destino,
  };

  const data = await fetch('/api/', {
    method: 'POST',
    body: JSON.stringify(reserva),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const message = 'Reserva creada con exito';
  const messagenot = 'Error al crear la reserva';

  console.log(await data.json());
  if (!data) {
    alert(messagenot);
  }
  alert(message);
  window.location.href = '/';
});
