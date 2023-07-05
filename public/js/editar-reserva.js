const formReserva = document.querySelector('#formNuevaReserva');
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const fecha_vuelo = document.querySelector('#fecha_vuelo');
const cantidad_pasajeros = document.querySelector('#cantidad_pasajeros');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const costo_reserva = document.querySelector('#costo_reserva');
const destino = document.querySelector('#destino');

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  nombre.value = data.nombre;
  apellido.value = data.apellido;
  telefono.value = data.telefono;
  email.value = data.email;
  costo_reserva.value = data.costo_reserva;
  destino.value = data.destino;
});

formReserva.addEventListener('submit', async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    telefono: telefono.value,
    email: email.value,
    costo_reserva: costo_reserva.value,
    destino: destino.value,
  };

  const response = await fetch(`/api/${reservaId}`, {
    method: 'PUT',
    body: JSON.stringify(reservaActualizada),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const respToJson = await response.json();

  if (response.status !== 200) {
    return Swal.fire({
      title: 'Error',
      text: respToJson.message,
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  }

  setTimeout(() => {
    window.location.href = '/';
  }, 1000);
});
