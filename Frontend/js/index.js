const form  = document.getElementById('form-bienvenida');
const input = document.getElementById('nombre');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = input.value.trim();
  if (!nombre) return;                              // no pasa si esta vacio
  sessionStorage.setItem('nombreCliente', nombre);
  window.location.href = './productos.html';
});
