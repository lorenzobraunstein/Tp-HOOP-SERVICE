const botones = document.querySelectorAll(".btn-eliminar, .btn-activar");
const modalConfirmacion = document.getElementById("modalConfirmacion");
const mensajeModal = document.getElementById("mensajeModal");
const btnConfirmar = document.getElementById("btnConfirmar");

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
