const formulario = document.getElementById("form-alta-producto");

formulario.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const formData = new FormData(formulario);

  const peticion = await fetch("/productos", {
    method: "POST",
    body: formData,
  });

  if (peticion.ok) {
    window.location.href = "/productos/dashboard";
  }
});
