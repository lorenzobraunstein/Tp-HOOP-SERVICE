// ============================================================
// layout.js
// Se carga en todas las páginas del cliente. Tiene lo que
// comparten: el tema, el nombre del cliente y el carrito.
// Va SIEMPRE antes que los otros scripts en el HTML, porque
// productos.js, carrito.js y ticket.js usan sus funciones.
// ============================================================

const btnTema = document.getElementById("btn-tema");
const saludoEl = document.getElementById("saludo");
const pagina = document.body.dataset.page;

// ----- TEMA CLARO / OSCURO -----
// Bootstrap 5.3 elige todos sus colores leyendo el atributo
// data-bs-theme del <html>. Cambiándolo de "light" a "dark" se
// repinta la página entera sin tocar una sola clase nuestra.
// Lo guardamos en localStorage para que sobreviva a la recarga.

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-bs-theme", tema);
  localStorage.setItem("tema", tema);

  if (btnTema) {
    btnTema.textContent = tema === "dark" ? "☀️" : "🌙";
  }
}

aplicarTema(localStorage.getItem("tema") || "light");

if (btnTema) {
  btnTema.addEventListener("click", () => {
    const temaActual = document.documentElement.getAttribute("data-bs-theme");
    aplicarTema(temaActual === "dark" ? "light" : "dark");
  });
}

// ----- NOMBRE DEL CLIENTE -----
// Esto es un autoservicio: llegar al index significa cliente
// nuevo, así que ahí limpiamos nombre y carrito. Y si alguien
// entra a otra pantalla sin haber pasado por el index, lo
// mandamos de vuelta (si no, el saludo dice "Hola, null").

if (pagina === "index") {
  sessionStorage.removeItem("nombreCliente");
  localStorage.removeItem("carrito");
}

const nombreCliente = sessionStorage.getItem("nombreCliente");

if (!nombreCliente && pagina !== "index") {
  window.location.href = "./index.html";
}

if (saludoEl) {
  saludoEl.textContent = `¡Hola, ${nombreCliente}!`;
}

// ----- CARRITO -----
// El carrito es un array guardado en localStorage. Cada item es
// el producto que vino del backend más la cantidad elegida.
// localStorage guarda solo texto, por eso entra con stringify
// y sale con parse. Estas dos funciones viven acá para que las
// puedan usar productos.js, carrito.js y ticket.js.

function obtenerCarrito() {
  const carritoString = localStorage.getItem("carrito");

  if (carritoString) {
    return JSON.parse(carritoString);
  }

  return [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function calcularTotal(carrito) {
  let total = 0;

  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });

  return total;
}
