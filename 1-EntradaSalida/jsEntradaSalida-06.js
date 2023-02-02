/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //declaracion de variables
    let numero1;
    let numero2;
    let suma;
    //recoleccion de datos
    numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;

    //parseo de numeros ingresados

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    //aplicar la suma
    suma = numero1 + numero2;
    
    alert("El resultado de la suma es: " + suma); 
}