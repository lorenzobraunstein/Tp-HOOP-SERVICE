const listaCarrito = document.getElementById("lista__carrito");
const totalCarrito = document.getElementById("carrito-total");

window.addEventListener("load", () => {
  mostrarCarrito();
});

function mostrarCarrito() {
  const carrito = obtenerCarrito();

  listaCarrito.replaceChildren();

  carrito.forEach((producto) => {
    const card = document.createElement("article");
    card.classList.add("carrito-item");

    const imagen = document.createElement("img");
    imagen.classList.add("carrito-item__img");
    imagen.src = producto.imagen;

    const titulo = document.createElement("h2");
    titulo.classList.add("carrito-item__nombre", "h4", "mb-2", "fw-bold");
    titulo.textContent = `${producto.marca} ${producto.modelo}`;

    const precio = document.createElement("p");
    precio.classList.add("h5", "mb-0");
    precio.textContent = `$${producto.precio}`;

    const subtotal = document.createElement("p");
    subtotal.classList.add("carrito-item__subtotal", "h6", "mb-0");
    subtotal.textContent = `Subtotal: $${producto.precio * producto.cantidad}`;

    const botonQuitar = document.createElement("button");
    botonQuitar.type = "button";
    botonQuitar.textContent = "-";
    botonQuitar.classList.add("btn", "btn-primary");

    const cantidad = document.createElement("span");
    cantidad.textContent = `Cantidad: ${producto.cantidad}`;
    cantidad.classList.add("px-3", "fw-bold");

    const botonAgregar = document.createElement("button");
    botonAgregar.type = "button";
    botonAgregar.textContent = "+";
    botonAgregar.classList.add("btn", "btn-primary");

    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-primary", "ms-2");

    const controles = document.createElement("div");
    controles.classList.add("carrito-item__cantidad");

    botonQuitar.addEventListener("click", () => {
      modificarCantidadCarrito(producto, -1);
    });

    botonAgregar.addEventListener("click", () => {
      modificarCantidadCarrito(producto, 1);
    });

    botonEliminar.addEventListener("click", () => {
      eliminarProductoCarrito(producto);
    });

    controles.append(botonQuitar, cantidad, botonAgregar, botonEliminar);
    card.append(imagen, titulo, precio, subtotal, controles);

    listaCarrito.append(card);
  });
  totalCarrito.textContent = `$${calcularTotal(carrito)}`;
}

function modificarCantidadCarrito(producto, cambio) {
  const carrito = obtenerCarrito();

  carrito.forEach((item) => {
    if (item.id === producto.id) {
      item.cantidad += cambio;
    }
  });

  const carritoFiltrado = carrito.filter((item) => item.cantidad > 0);

  guardarCarrito(carritoFiltrado);

  mostrarCarrito();
}

function eliminarProductoCarrito(producto) {
  const carrito = obtenerCarrito();

  const carritoFiltrado = carrito.filter((item) => item.id !== producto.id);

  guardarCarrito(carritoFiltrado);

  mostrarCarrito();
}
