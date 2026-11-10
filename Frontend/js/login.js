const form = document.getElementById("form-login");
const btnAutocompletar = document.getElementById("btn-autocompletar");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const contraseña = document.getElementById("contraseña").value.trim();

  const credenciales = {
    email,
    contraseña,
  };

  const body = JSON.stringify(credenciales); // si lo mandamos como texto sin el JSON.stringify, nos manda [Object object]

  if (!email || !contraseña) return; // no pasa si esta vacio

  const peticion = await fetch("http://localhost:3000/usuarios/login", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!peticion.ok) {
    return;
  } else {
    window.location.href = "./dashboard.html";
  }
});

btnAutocompletar.addEventListener("click", () => {
  document.getElementById("email").value = "miemail@4gmail.com";
  document.getElementById("contraseña").value = "estaesmicontraseña";
});
