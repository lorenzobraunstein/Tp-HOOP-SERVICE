const botones = document.querySelectorAll(".btn-eliminar, .btn-activar");
const modalConfirmacion = document.getElementById("modalConfirmacion");
const mensajeModal = document.getElementById("mensajeModal");
const btnConfirmar = document.getElementById("btnConfirmar");
const btnDescargarVentas = document.getElementById("btn-descargar-ventas");

const modal = new bootstrap.Modal(modalConfirmacion);

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const accion = boton.classList.contains("btn-eliminar")
      ? "desactivar"
      : "activar";

    mensajeModal.textContent =
      accion === "desactivar"
        ? "¿Está seguro de querer eliminar este producto?"
        : "¿Está seguro de querer activar este producto?";

    modal.show();

    btnConfirmar.onclick = async () => {
      await cambiarEstadoProducto(boton.id, accion);
    };
  });
});

const cambiarEstadoProducto = async (id, accion) => {
  await fetch(`http://localhost:3000/productos/${accion}/${id}`, {
    method: "PATCH",
  });

  window.location.reload();
};

btnDescargarVentas.addEventListener("click", () => {
  descargarVentas();
});

const descargarVentas = async () => {
  const peticion = await fetch("http://localhost:3000/ventas");

  const ventas = await peticion.json();

  const filas = [
    [
      "Venta",
      "Cliente",
      "Fecha",
      "Producto",
      "Cantidad",
      "Precio unitario",
      "Total de la venta",
    ],
  ];

  ventas.forEach((venta) => {
    venta.Productos.forEach((producto) => {
      filas.push([
        venta.id,
        venta.nombreCliente,
        new Date(venta.createdAt).toLocaleString("es-AR"),
        `${producto.marca} ${producto.modelo}`,
        producto.VentaProducto.cantidad,
        Number(producto.VentaProducto.precioUnitario),
        Number(venta.precioTotal),
      ]);
    });
  });

  const libro = XLSX.utils.book_new();

  const hoja = XLSX.utils.aoa_to_sheet(filas);

  XLSX.utils.book_append_sheet(libro, hoja, "VENTAS");

  XLSX.writeFile(libro, "ventas.xlsx");
};
