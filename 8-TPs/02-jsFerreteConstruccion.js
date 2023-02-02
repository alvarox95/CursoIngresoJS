/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //declaracion de variables

    let largoTerreno;
    let anchoTerreno;
    let rectanguloAlambre;
    let hilosAlambre;

    //Recollecion de datos
    hilosAlambre = 3
    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    //parseo de los valores ingresados

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    //calculo del rectangulo

    rectanguloAlambre = ((2 * (anchoTerreno + largoTerreno)) * hilosAlambre) ;
    
    alert("El alambre necesario es de: " + rectanguloAlambre + " Mts.");

}
function Circulo () 
{
    //declaracion de variables

    let circuloAlambre;
    let radioTerreno;
    let hilosAlambre;

    
    //Recollecion de datos
    
    hilosAlambre = 3
    radioTerreno = txtIdRadio.value;

    //parseo de los valores ingresados

    radioTerreno = parseFloat(radioTerreno);

    //calculo del circulo

    circuloAlambre = (Math.PI * (radioTerreno * radioTerreno)) *hilosAlambre;

    alert("El alambre necesario es de: " + circuloAlambre + " Mts.");

}
function Materiales () 
{
    //resolucion del problema

    let largoTerreno;
    let anchoTerreno;
    let perimetroTerreno;
    let bolsasCemento;
    let bolsasCal;

    //Recollecion de datos

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;
    
    //parseo de los valores ingresados

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    //calculo del perimetro

    perimetroTerreno = (2 * (anchoTerreno + largoTerreno));

    //calculo de las bolsas de cemento y cal

    bolsasCemento = perimetroTerreno * 2;
    bolsasCal = perimetroTerreno * 3;

    alert("Se necesitan " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal.");
}