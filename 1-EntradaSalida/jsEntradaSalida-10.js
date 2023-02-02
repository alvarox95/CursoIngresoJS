/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaracion de variables

	let importe;
	let resultado;
	let descuento

	//lectura de valor ingresaro

	importe = txtIdImporte.value;

	//parseo del importe ingresado

	importe = parseInt(importe)

	//asignar valor a descuento

	descuento = 0.25

	//multiplicar el importe por el descuento

	resultado = importe - (importe * descuento);

	txtIdResultado.value = resultado

}
