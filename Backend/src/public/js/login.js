const form = document.getElementById("form-login");

document.getElementById("btn-acceso-rapido").addEventListener("click", () => {
  document.getElementById("email").value = "admin@hoopservice.com";
  document.getElementById("contraseña").value = "admin1234";
});

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
    Toastify({
      text: "Las credenciales no son correctas",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      close: true,
      style: {
        background: "#bd0038",
      },
    }).showToast();
  } else {
    window.location.href = "/productos/dashboard";
  }
});
