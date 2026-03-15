const tipoHabitacion = document.getElementById("sel-hab");
const numPersonas = document.getElementById("num-pers");
const totalTexto = document.getElementById("txt-total");
const boton = document.getElementById("btn-whatsapp");

function calcularTotal(){

const precio =
tipoHabitacion.options[tipoHabitacion.selectedIndex].dataset.precio;

const personas = numPersonas.value;

const total = precio * personas;

totalTexto.innerText = "$" + total + " MXN";

}

tipoHabitacion.addEventListener("change", calcularTotal);
numPersonas.addEventListener("input", calcularTotal);


boton.addEventListener("click", function(){

const tipo = tipoHabitacion.value;
const personas = numPersonas.value;
const total = totalTexto.innerText;

const mensaje =
`Hola, me gustaría reservar en Casa Malegrande.

Tipo de habitación: ${tipo}
Número de personas: ${personas}
Total estimado: ${total}

¿Hay disponibilidad?`;

const telefono = "5215569691302";

const url =
`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

window.open(url,"_blank");

});