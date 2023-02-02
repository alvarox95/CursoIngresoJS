/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //declaracion de variables

	let tempIngresada;
    let tempConvertida;
    
    //recoleccion de datos

    tempIngresada = txtIdTemperatura.value;


    //parseo del valor ingresado

    tempIngresada = parseInt(tempIngresada)
    //convertir a celcius

    tempConvertida = ( (tempIngresada - 32) * (5/9));

    alert(tempIngresada + " Fahrenheit son: " + tempConvertida + "° centigrados")

    
}

function CentigradosFahrenheit () 
{
	let tempIngresada;
    let tempConvertida;
    
    //recoleccion de datos

    tempIngresada = txtIdTemperatura.value;


    //parseo del valor ingresado

    tempIngresada = parseInt(tempIngresada)
    //convertir a Fahrenheit

    tempConvertida = ((tempIngresada * (9/5)) + 32 );

    alert(tempIngresada + "° centigrados  son: " + tempConvertida + "° Fahrenheit")

    
}
