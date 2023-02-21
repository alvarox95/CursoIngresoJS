/*
Alumno: Alvaro Medici
Ejercicio N°: 7
Tema: While
Enunciado:
Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let pregunta;
	let numeroIngresado;

	contador = 0;
	acumulador = 0;
	respuesta = "si";
	pregunta = prompt("Desea Ingresar un numero?")
	
	while(pregunta == respuesta){
		contador++;
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)){
			numeroIngresado = prompt("Error, Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		acumulador = acumulador + numeroIngresado;
		pregunta = prompt("Desea Ingresar Otro Numero?");
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}