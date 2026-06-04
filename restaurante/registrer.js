const form = document.getElementById("registroFormulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const tipo_documento = document.getElementById("tipo_documento");
const numero_documento = document.getElementById("numero_documento");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const genero = document.getElementById("genero");
const fecha_nacimiento = document.getElementById("fecha_nacimiento");
const cargo = document.getElementById("cargo");
const contrasena = document.getElementById("contrasena");
const registroError = document.getElementById("registroError");

function mostrarErrores(errores) {
  if (errores.length === 0) {
    registroError.classList.add("is-hidden");
    registroError.innerHTML = "";
    return;
  }

  registroError.classList.remove("is-hidden");
  registroError.innerHTML = "<ul>" + errores.map(error => `<li>${error}</li>`).join("") + "</ul>";
}

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validarTelefono(valor) {
  const cleaned = valor.replace(/[^0-9]/g, "");
  return cleaned.length >= 7;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const errores = [];

  if (!nombre.value.trim()) {
    errores.push("El nombre es obligatorio.");
  }

  if (!apellido.value.trim()) {
    errores.push("El apellido es obligatorio.");
  }

  if (!tipo_documento.value) {
    errores.push("Debe seleccionar un tipo de documento.");
  }

  if (!numero_documento.value.trim()) {
    errores.push("El número de documento es obligatorio.");
  }

  if (!telefono.value.trim()) {
    errores.push("El teléfono es obligatorio.");
  } else if (!validarTelefono(telefono.value)) {
    errores.push("El teléfono no es válido. Ingrese al menos 7 dígitos.");
  }

  if (!correo.value.trim()) {
    errores.push("El correo electrónico es obligatorio.");
  } else if (!validarEmail(correo.value)) {
    errores.push("El correo electrónico no tiene un formato válido.");
  }

  if (!genero.value) {
    errores.push("Debe seleccionar un género.");
  }

  if (!cargo.value.trim()) {
    errores.push("El cargo es obligatorio.");
  }

  if (!fecha_nacimiento.value) {
    errores.push("La fecha de nacimiento es obligatoria.");
  }

  if (!contrasena.value.trim()) {
    errores.push("La contraseña es obligatoria.");
  } else if (contrasena.value.length < 6) {
    errores.push("La contraseña debe tener al menos 6 caracteres.");
  }

  mostrarErrores(errores);

  if (errores.length === 0) {
    alert("Datos validados correctamente. Puedes proceder con el registro.");
    form.reset();
  }
});
