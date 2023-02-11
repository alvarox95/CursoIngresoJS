/*
Alumno: Alvaro Medici
Ejercicio N°: 1
Tema: Switch
Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */
function mostrar()
{
	let mesSeleccionado;
	let mensaje;

	mesSeleccionado = txtIdMes.value;

	switch (mesSeleccionado) {
		case "Enero":
			mensaje = "que comiences bien el año!!";			
			break;
		case "Marzo":
			mensaje = "a clases!!!";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!";
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!.";
			break;
		default:
			mensaje = "No hay un mensaje para ese mes";
			break;
	}
	alert(mensaje)
}