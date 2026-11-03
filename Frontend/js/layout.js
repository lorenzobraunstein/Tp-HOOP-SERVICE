const saludoEl = document.getElementById("saludo");

if (saludoEl) {
  const nombre = sessionStorage.getItem('nombreCliente');
  saludoEl.textContent = `¡Hola, ${nombre}! 👋`;
}
