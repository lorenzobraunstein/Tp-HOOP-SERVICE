const form = document.getElementById("form-bienvenida");
const input = document.getElementById("nombre");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sessionStorage.setItem("nombreCliente", input.value);
  window.location.href = "productos.html";
});
 