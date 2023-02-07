function mostrar()
{
	//tomo la edad  
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad >= 18){
		alert("Es mayor de Edad");
	}	if (edad <= 18){
		alert("Es menor de Edad");
	}

}//FIN DE LA FUNCIÓN