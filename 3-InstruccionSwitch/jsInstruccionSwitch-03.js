/*
Alumno: Alvaro Medici
Ejercicio N°: 3
Tema: Switch
Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar() {

	let mesSeleccionado;
	let mensaje;

	mesSeleccionado = txtIdMes.value;

	switch (mesSeleccionado){
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;

		default:
			mensaje = "Este mes tiene 30 o más días";
			break;
	}
	alert(mensaje);

}
