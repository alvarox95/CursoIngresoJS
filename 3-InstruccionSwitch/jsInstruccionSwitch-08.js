/*
Alumno: Alvaro Medici
Ejercicio N°: 8
Tema: Switch
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	let destino;
	let mensaje;

	destino = txtIdDestino.value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			mensaje = "En el destino hace FRIO";
			break;
		default:
			mensaje = "En el destino hace CALOR"
	}
	alert(mensaje);

}