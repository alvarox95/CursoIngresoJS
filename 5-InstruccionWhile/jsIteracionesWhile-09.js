/*
Alumno: Alvaro Medici
Ejercicio N°: 9
Tema: While
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let pregunta;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;

	contador = 0;
	acumulador = 0;
	respuesta = "si";
	pregunta = prompt("Desea Ingresar un numero?")
	numeroMaximo = 0;
	numeroMinimo = 0;

	while(pregunta == respuesta){
		contador++;
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		pregunta = prompt("Desea Ingresar Otro Numero?");
		if(contador == 1){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}else{
			if(numeroIngresado > numeroMaximo){
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
		}
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
	
}