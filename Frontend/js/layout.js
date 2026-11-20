const btnTema = document.getElementById("btn-tema");
const saludoEl = document.getElementById("saludo");
const pagina = document.body.dataset.page;

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
