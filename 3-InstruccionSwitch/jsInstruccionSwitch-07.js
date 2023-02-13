/*
Alumno: Alvaro Medici
Ejercicio N°: 7
Tema: Switch
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar() {
	let destino;
	let mensaje;

	destino = txtIdDestino.value;

	switch(destino){
		case "Bariloche":
			mensaje = "El destino se encuentra en el Este";
			break;
		case "Cataratas":
			mensaje = "El destino se encuentra en el Norte";
			break;
		case "Ushuaia":
			mensaje = "El destino se encuentra en el Sur";
			break;
		default:
			mensaje = "El destino se encuentra en el Oeste";
	}
	alert(mensaje);
}