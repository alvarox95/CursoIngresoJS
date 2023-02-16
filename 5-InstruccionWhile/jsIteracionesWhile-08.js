/*
Alumno: Alvaro Medici
Ejercicio N°: 8
Tema: While
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	debugger;
	let contador;
	let acumulador;
	let respuesta;
	let pregunta;
	let numeroIngresado;
	let sumaPositivos;
	let multiplicacionNegativos;

	contador = 0;
	acumulador = 0;
	respuesta = "si";
	pregunta = prompt("Desea Ingresar un numero?")
	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	while(pregunta == respuesta){
		contador++;
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		pregunta = prompt("Desea Ingresar Otro Numero?");
		if(numeroIngresado > 0){
			sumaPositivos = sumaPositivos + numeroIngresado;
		}else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
}