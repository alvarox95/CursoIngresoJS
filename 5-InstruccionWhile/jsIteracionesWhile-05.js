/*
Alumno: Alvaro Medici
Ejercicio N°: 5
Tema: While
Enunciado:
Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	let sexoIngresado;
	let sexoF;
	let sexoM;

	sexoF = "f"
	sexoM = "m"
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != sexoF && sexoIngresado != sexoM){
		sexoIngresado = prompt("Sexo incorrecto. Ingrese f ó m .");
	}

	txtIdSexo.value=sexoIngresado;
}