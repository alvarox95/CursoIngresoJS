function mostrar()
{
	//tomo la edad  
	
	let edad;
	let estado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad < 18 && estado != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}
}//FIN DE LA FUNCIÓN