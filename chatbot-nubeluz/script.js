// Respuestas básicas de Nubeluz: puedes cambiar estos textos para personalizar el chatbot.
function obtenerRespuesta(texto) {
  const mensaje = texto.toLowerCase();

  if (mensaje.includes("hola") || mensaje.includes("buenas")) {
    return "¡Hola! Bienvenida a Nubeluz Moldes de Confección. ¿Qué prenda deseas elaborar?";
  }
  if (mensaje.includes("molde") || mensaje.includes("patrón") || mensaje.includes("patron")) {
    return "En Nubeluz elaboramos moldes para diferentes prendas. Cuéntanos qué diseño, talla o tipo de prenda necesitas.";
  }
  if (mensaje.includes("servicio")) {
    return "Ofrecemos elaboración y ajuste de moldes, asesoría de confección y apoyo para desarrollar tus diseños.";
  }
  if (mensaje.includes("pedido") || mensaje.includes("cotización") || mensaje.includes("cotizacion") || mensaje.includes("precio")) {
    return "Para cotizar tu pedido, indícanos la prenda, la talla, la cantidad y si cuentas con una imagen de referencia.";
  }
  if (mensaje.includes("gracias")) {
    return "¡Con gusto! En Nubeluz será un placer acompañarte en tu proyecto de confección.";
  }
  return "Puedo orientarte sobre moldes, servicios y pedidos. Cuéntame qué prenda quieres confeccionar.";
}

function crearChat(idFormulario, idEntrada, idMensajes) {
  const formulario = document.getElementById(idFormulario);
  const entrada = document.getElementById(idEntrada);
  const mensajes = document.getElementById(idMensajes);

  function agregarMensaje(texto, tipo) {
    const mensaje = document.createElement("div");
    mensaje.className = `mensaje ${tipo}`;
    mensaje.textContent = texto;
    mensajes.appendChild(mensaje);
    mensajes.scrollTop = mensajes.scrollHeight;
  }

  function responder(texto) {
    agregarMensaje(texto, "usuario");
    entrada.value = "";
    window.setTimeout(() => agregarMensaje(obtenerRespuesta(texto), "bot"), 450);
  }

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const texto = entrada.value.trim();
    if (texto) responder(texto);
  });

  return responder;
}

const responderRectangular = crearChat("formularioRectangular", "entradaRectangular", "mensajesRectangular");
crearChat("formularioFlotante", "entradaFlotante", "mensajesFlotante");

document.querySelectorAll("#opcionesRectangular button").forEach((boton) => {
  boton.addEventListener("click", () => responderRectangular(boton.textContent));
});

const chatFlotante = document.getElementById("chatFlotante");
document.getElementById("abrirChat").addEventListener("click", () => chatFlotante.classList.remove("oculto"));
document.getElementById("cerrarChat").addEventListener("click", () => chatFlotante.classList.add("oculto"));
