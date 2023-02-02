/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaracion de variables
    let dividendo;
    let divisor;
    let resto;

    //recoleccion de datos
    dividendo = document.getElementById("txtIdNumeroDividendo").value;
    divisor = document.getElementById("txtIdNumeroDivisor").value;

    //parseo de los numeros

    dividendo = parseInt(dividendo);
    divisor = parseInt(divisor)

    //aplicar la resto
    resto = dividendo % divisor;
    
    alert("El resultado de la resto es: " + resto); 

}
