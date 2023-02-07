function mostrar() {
  //tomo la edad
  let edad;

  edad = txtIdEdad.value;

  edad = parseInt(edad);

  if (edad > 17) {
    alert("Es mayor");
  } else {
    if (edad < 12) {
      alert("Es niño");
    } else {
      alert("Es adolecente");
    }
  }
} //FIN DE LA FUNCIÓN
