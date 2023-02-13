/*
Alumno: Alvaro Medici
Ejercicio N°: 4
Tema: Switch
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar() {
	let mesSeleccionado;
	let mensaje;

	mesSeleccionado = txtIdMes.value;

	switch (mesSeleccionado) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
		mensaje = "El mes tiene 31 dias";
		break;

	case "Febrero":
		mensaje = "El mes tiene 28 dias";
		break;
	default:
		mensaje = "El mes tiene 30 dias"
	}
	alert(mensaje);
}
