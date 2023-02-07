/*
Alumno: Alvaro Medici.
Ejercicio N°: 10
Tema: IF
Enunciado: Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar() {
  let notaRandom;

  notaRandom = Math.round(Math.random(notaRandom) * 9 + 1);
  if (notaRandom > 8) {
    alert(`La nota ${notaRandom} es EXELENTE`);
  } else {
    if (notaRandom > 4 && notaRandom < 9) {
      alert(`La nota ${notaRandom} APROBO`);
    } else {
      alert(`La nota es: ${notaRandom}, Vamos la proxima se puede`);
    }
  }
}
