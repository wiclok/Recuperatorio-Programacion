const obtenerDatos = async () => {
  const data = await fetch('/api', {
    method: 'GET',
  });
  const reservas = await data.json();
  return reservas;
};

const mostrarReservas = (reservas, tablaElement) => {
  let registros = '';
  reservas.forEach((reserva) => {
    registros += `
        <tr>
            <td>${reserva.codigo}</td>
            <td>${reserva.apellido}</td>
            <td>${reserva.nombre}</td>
            <td>${reserva.fecha_vuelo}</td>
            <td>${reserva.cantidad_pasajeros}</td>
            <td>${reserva.costo_reserva}</td>
            <td>${reserva.destino}</td>
            <td>${reserva.telefono}</td>
            <td>${reserva.email}</td>
            <td>
            <div class="row">
            <a href="/actualizarReserva/${reserva.id}" class="btn btn-sm btn-warning">Editar</a>
            <button class="btn btn-danger btn-sm" data-id="${reserva.id}" onClick=eliminarReserva(event)>Eliminar</button>
            </div>
            </td>
        </tr>
    `;
  });

  tablaElement.innerHTML = registros;
};

const eliminarReserva = async (e) => {
  console.log(e);
  const id = e.target.dataset.id;

  const response = await fetch(`/api/${id}`, {
    method: 'DELETE',
  });

  const data = await response.json();

  alert(data.message);

  window.location.href = '/';
};

document.addEventListener('DOMContentLoaded', async () => {
  const tbody = document.querySelector('#listadoReservas');
  const reservas = await obtenerDatos();
  mostrarReservas(reservas, tbody);
});
