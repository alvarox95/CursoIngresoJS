/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	    //declaracion de variables
        let numero1;
        let numero2;
        let resta;
        //recoleccion de datos
        numero1 = document.getElementById("txtIdNumeroUno").value;
        numero2 = document.getElementById("txtIdNumeroDos").value;
    
        //parseo de numeros ingresados

        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        //aplicar la resta
        resta = numero1 - numero2;
        
        alert("El resultado de la resta es: " + resta); 
}

function multiplicar()
{ 
	//declaracion de variables
    let numero1;
    let numero2;
    let multiplicacion;
    //recoleccion de datos
    numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;
    
    //parseo de numeros ingresados

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    

    //aplicar la multiplicacion
    multiplicacion = numero1 * numero2;
    
    alert("El resultado de la multiplicacion es: " + multiplicacion); 
}

function dividir()
{
	//declaracion de variables
    let numero1;
    let numero2;
    let division;
    //recoleccion de datos
    numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;

    //parseo de numeros ingresados

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    //aplicar la division
    division = numero1 / numero2;
    
    alert("El resultado de la division es: " + division); 
}

