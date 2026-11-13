const papelTicket = document.querySelector(".ticket__papel");
const botonPDF = document.getElementById("btn-pdf");

window.addEventListener("load", () => {
  mostrarTicket();
});

botonPDF.addEventListener("click", () => {
  window.print();
});

function mostrarTicket() {
  const carrito = obtenerCarrito();

  papelTicket.replaceChildren();

  const encabezado = document.createElement("header");
  encabezado.classList.add("ticket__encabezado");

  const nombreEmpresa = document.createElement("h2");
  nombreEmpresa.textContent = "HOOP SERVICE";

  encabezado.append(nombreEmpresa);

  const datos = document.createElement("div");
  datos.classList.add("ticket__datos");

  const cliente = document.createElement("p");
  cliente.textContent = `Cliente: ${sessionStorage.getItem("nombreCliente")}`;

  const fechaCompra = new Date();
  const fechaElemento = document.createElement("p");
  fechaElemento.textContent = `Fecha: ${fechaCompra.toLocaleString("es-AR")}`;

  datos.append(cliente, fechaElemento);

  const detalle = document.createElement("div");
  detalle.classList.add("ticket__detalle");

  carrito.forEach((producto) => {
    const linea = document.createElement("div");
    linea.classList.add("ticket__linea");

    const cantidad = document.createElement("span");
    cantidad.textContent = `${producto.cantidad}x`;

    const nombre = document.createElement("span");
    nombre.textContent = `${producto.marca} ${producto.modelo}`;

    const subtotal = document.createElement("span");
    subtotal.textContent = producto.precio * producto.cantidad;

    linea.append(cantidad, nombre, subtotal);
    detalle.append(linea);
  });

  const total = document.createElement("div");
  total.classList.add("ticket__total");

  total.textContent = `Total: $${calcularTotal(carrito)}`;

  papelTicket.append(encabezado, datos, detalle, total);
}
