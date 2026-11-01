const saludo = document.getElementById("saludo");

const nombreCliente = sessionStorage.getItem("nombreCliente");

saludo.textContent = "Hola, " + nombreCliente;
