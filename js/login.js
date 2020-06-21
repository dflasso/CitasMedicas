const contenedorAlertaLoginFallido = document.querySelector("#alertaLoginFallido");


function validateUser() {
  event.preventDefault();
  const username = document.getElementById("inputUsername").value;
  const password = document.getElementById("inputPassword").value;

  if (username === 'Paciente' && password === '12345') {
    window.location = "paciente/home.html";
  } else if (username === 'AgenteSeguro' && password === '12345') {
    window.location = "agenteSeguro/home.html";
  } else if (username === 'Secretaria' && password === '12345') {
    window.location = "secretaria/home.html";
  } else if (username === 'Doctor' && password === '12345') {
    window.location = "doctor/home.html";
  } else {
    contenedorAlertaLoginFallido.innerHTML = `<div class="alert alert-danger" role="alert">
    Nombre de usuario o contraseña incorrectas.
  </div>`
  }
}