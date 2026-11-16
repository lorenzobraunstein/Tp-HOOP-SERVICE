const formulario = document.getElementById("form-modificar-producto");

formulario.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const id = formulario.dataset.id;
  const formData = new FormData(formulario);

  const peticion = await fetch(`/productos/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (peticion.ok) {
    window.location.href = "/productos/dashboard";
  }
});
