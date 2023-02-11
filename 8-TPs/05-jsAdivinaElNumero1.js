/*
Alumno: Alvaro Medici.
TP: 5
Tema: IF/SWITCH 	
Enunciado:
Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let contadorIntentos;
let contador;

contador = 0;

function comenzar() {
  //Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random(numeroSecreto) * 99 + 1);
  contador = 0;
  txtIdIntentos.value = contador;
  alert(numeroSecreto);
}

function verificar() {
  if (numeroSecreto == txtIdNumero.value) {
    txtIdIntentos.value = contador;
    contador++;
    alert(`Usted es un ganador!!! y en solo ${contador} intentos`)
  }
  else
  {
    if(numeroSecreto > txtIdNumero.value)
    {
      contador++;
      txtIdIntentos.value = contador;
      alert("Falta para llegar al numero secreto")
    }
    else
    {
      contador++;
      alert("Te pasaste del numero secreto")
      txtIdIntentos.value = contador;
    }
  }
}
