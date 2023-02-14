/*
Alumno: Alvaro Medici
Ejercicio N°: 3
Tema: While
Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	debugger;
	let clave;
	let claveIngresada;
	clave = "utn750";
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != clave){
		claveIngresada = prompt("Clave incorrecta. Reingrese el número clave.");
	}

	alert("Clave correcta.");
}
