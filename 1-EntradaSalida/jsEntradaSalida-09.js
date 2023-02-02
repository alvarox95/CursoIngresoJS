/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaracion de variables

	let sueldo;
	let resultado;
	let aumento

	//lectura de valor ingresaro

	sueldo = document.getElementById("txtIdSueldo").value;

	//parseo del sueldo ingresado

	sueldo = parseInt(sueldo)

	//asignar valor a aumento

	aumento = 0.1

	//multiplicar el sueldo por el aumento

	resultado = sueldo + (sueldo * aumento);

	document.getElementById("txtIdResultado").value = resultado

}
