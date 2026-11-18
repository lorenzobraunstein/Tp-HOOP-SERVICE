const listaProductos = document.getElementById("lista-productos");
const contenedorCategorias = document.querySelector(".productos__categorias");

const btnMostrarTodo = document.getElementById("btnTodo");
const btnMostrarZapatillas = document.getElementById("btnZapatillas");
const btnMostrarCamisetas = document.getElementById("btnCamisetas");

const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const indicadorPagina = document.getElementById("indicador-pagina");

let paginaActual = 1;
let tipoActual = "";

const limite = 6;

window.addEventListener("load", () => {
  traerProductos();
});

btnMostrarTodo.addEventListener("click", () => {
  cambiarTipo("");
  mostrarFiltroActivo(btnMostrarTodo);
});

btnMostrarZapatillas.addEventListener("click", () => {
  cambiarTipo("zapatillas");
  mostrarFiltroActivo(btnMostrarZapatillas);
});

btnMostrarCamisetas.addEventListener("click", () => {
  cambiarTipo("camisetas");
  mostrarFiltroActivo(btnMostrarCamisetas);
});

btnAnterior.addEventListener("click", () => {
  paginaActual = paginaActual - 1;

  traerProductos();
});

btnSiguiente.addEventListener("click", () => {
  paginaActual = paginaActual + 1;

  traerProductos();
});

function cambiarTipo(tipo) {
  tipoActual = tipo;
  paginaActual = 1;

  traerProductos();
}

const traerProductos = async () => {
  const peticion = await fetch(
    `http://localhost:3000/productos?page=${paginaActual}&limit=${limite}&tipo=${tipoActual}`,
  );

  const datos = await peticion.json();

  if (!peticion.ok) {
    return;
  }

  if (datos.length === 0 && paginaActual > 1) {
    paginaActual = paginaActual - 1;

    traerProductos();
    return;
  }

  mostrarProductos(datos);
  mostrarPaginacion(datos);
};

function mostrarPaginacion(productosDeLaPagina) {
  indicadorPagina.textContent = `Página ${paginaActual}`;

  btnAnterior.disabled = paginaActual === 1;
  btnSiguiente.disabled = productosDeLaPagina.length < limite;
}

function modificarCantidadCarrito(producto, cambio, div) {
  const carrito = obtenerCarrito();
  let productoYaAgregado = false;

  carrito.forEach((item) => {
    if (item.id === producto.id) {
      item.cantidad += cambio;
      productoYaAgregado = true;
    }
  });

  if (!productoYaAgregado) {
    carrito.push({ ...producto, cantidad: 1 });
  }

  const carritoFiltrado = carrito.filter((item) => item.cantidad > 0);

  guardarCarrito(carritoFiltrado);

  mostrarBotonesCantidad(producto, div);
}

function mostrarBotonesCantidad(producto, div) {
  const carrito = obtenerCarrito();

  let productoYaAgregado = false;
  let cantidadProducto = 0;

  carrito.forEach((item) => {
    if (item.id === producto.id) {
      productoYaAgregado = true;
      cantidadProducto = item.cantidad;
    }
  });

  div.replaceChildren();

  if (productoYaAgregado) {
    const botonQuitar = document.createElement("button");
    botonQuitar.type = "button";
    botonQuitar.textContent = "-";
    botonQuitar.classList.add("btn", "btn-primary");

    const cantidad = document.createElement("span");
    cantidad.textContent = cantidadProducto;
    cantidad.classList.add("px-3", "fw-bold");

    const botonAgregar = document.createElement("button");
    botonAgregar.type = "button";
    botonAgregar.textContent = "+";
    botonAgregar.classList.add("btn", "btn-primary");

    botonQuitar.addEventListener("click", () => {
      modificarCantidadCarrito(producto, -1, div);
    });

    botonAgregar.addEventListener("click", () => {
      modificarCantidadCarrito(producto, 1, div);
    });

    div.append(botonQuitar, cantidad, botonAgregar);
  } else {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "Agregar al carrito";
    boton.classList.add("btn", "btn-primary");

    boton.addEventListener("click", () => {
      modificarCantidadCarrito(producto, 1, div);
    });

    div.append(boton);
  }
}

function mostrarProductos(productosAMostrar) {
  listaProductos.replaceChildren();

  productosAMostrar.forEach((producto) => {
    const card = document.createElement("article");
    card.classList.add("producto-card", "text-center");

    const imagen = document.createElement("img");
    imagen.classList.add("producto-card__img");
    imagen.src = producto.imagen;

    const titulo = document.createElement("h2");
    titulo.classList.add("h4", "mb-2", "fw-bold");
    titulo.textContent = `${producto.marca} ${producto.modelo}`;

    const precio = document.createElement("p");
    precio.classList.add("h5", "mb-0");
    precio.textContent = `$${producto.precio}`;

    const acciones = document.createElement("div");
    acciones.classList.add("producto-card__acciones");

    card.append(imagen, titulo, precio, acciones);

    listaProductos.append(card);

    mostrarBotonesCantidad(producto, acciones);
  });
}

function mostrarFiltroActivo(boton) {
  const botones = contenedorCategorias.querySelectorAll(".btn");

  botones.forEach((boton) => {
    boton.classList.remove("btn-primary");
    boton.classList.add("btn-outline-dark");
  });

  boton.classList.remove("btn-outline-dark");
  boton.classList.add("btn-primary");
}
