/*
Alumno: Alvaro Medici
Ejercicio N°: 4
Tema: While
Enunciado:
al presionar el botón pedir un número entre 0 y 9 inclusive.
*/
function mostrar()
{
	let numeroIngresado;
	let numeroMinimo;
	let numeroMaximo;
	numeroMinimo = 0;
	numeroMaximo = 9;

	numeroIngresado = prompt("Ingrese un número entre 0 y 9 inclusive.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < numeroMinimo || numeroIngresado > numeroMaximo){
		numeroIngresado = prompt("Número incorrecto. Ingrese un número entre 0 y 9 inclusive.");
		numeroIngresado = parseInt(numeroIngresado);
	}

	txtIdNumero.value = numeroIngresado;
}