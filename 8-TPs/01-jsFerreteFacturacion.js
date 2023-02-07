/*
Alumno: Alvaro Medici.
TP: 1
Tema: IF
Enunciado:
1. Para el departamento de facturación:
A. Ingresar tres precios de productos y mostrar la suma de los mismos.
B. Ingresar tres precios de productos y mostrar el promedio de los mismos.
C. ingresar tres precios de productos sumarlos y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  //declaracion de variables
    let primerNumero;
    let segundoNumero;
    let tercerNumero;
    let suma;
    //recoleccion de datos
    primerNumero = txtIdPrecioUno.value;
    segundoNumero = txtIdPrecioDos.value;
    tercerNumero = txtIdPrecioTres.value;
    //parseo de numeros ingresados

    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    tercerNumero = parseInt(tercerNumero);

    //aplicar la suma
    suma = primerNumero + segundoNumero + tercerNumero;

    alert("El resultado de la suma es: " + suma);
}
function Promedio() {
    //declaracion de variables
    let primerNumero;
    let segundoNumero;
    let tercerNumero;
    let promedio;
    //recoleccion de datos
    primerNumero = txtIdPrecioUno.value;
    segundoNumero = txtIdPrecioDos.value;
    tercerNumero = txtIdPrecioTres.value;
    //parseo de numeros ingresados

    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    tercerNumero = parseInt(tercerNumero);

    //aplicar el promedio

    promedio = (primerNumero + segundoNumero + tercerNumero) / 3;

    alert("El Resultado del promedio es: " + promedio)

}
function PrecioFinal() {
    //declaracion de variables
    let primerNumero;
    let segundoNumero;
    let tercerNumero;
    let iva;
    let precioFinal;
    //recoleccion de datos
    iva = 1.21;
    primerNumero = txtIdPrecioUno.value;
    segundoNumero = txtIdPrecioDos.value;
    tercerNumero = txtIdPrecioTres.value;
    //parseo de numeros ingresados

    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    tercerNumero = parseInt(tercerNumero);

    //aplicar el iva al precio ingresado

    precioFinal = (primerNumero * iva) + (segundoNumero * iva) + (tercerNumero * iva)

    alert("El Precio final de la suma con el IVA es de: " + precioFinal) 
}
