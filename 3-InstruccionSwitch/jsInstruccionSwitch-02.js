/*Alumno: Alvaro Medici
Ejercicio N°: 2
Tema: Switch
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/


function mostrar()
{
	let mesSeleccionado;
	let mensaje;

	mesSeleccionado = txtIdMes.value;

	switch (mesSeleccionado) {
		case "Enero":
		case "Febrero":
		case "Marzo" :
		case "Abril":
		case "Mayo":
			mensaje = "Falta para el invierno.";
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!";
			break;
	}
	alert(mensaje)
}