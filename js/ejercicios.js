/**
 * utilizar un bucle ,mostrar la suma y la media de los numeros introducidos 
 * hasta introducir un numero negativo y ahi mostrar el vlaor del resultado
 */

'use strict'


var array_valores = [];
while ( true ) {
    var valor_numerico = parseInt(prompt("Introduce un numero mayor que cero ..."));
    if (valor_numerico < 0) {
        break;
    } else if(isNaN(valor_numerico)){
        valor_numerico = 0;
    }
    array_valores.push(valor_numerico);
}
//suma
var suma = 0;
for (let index = 0; index < array_valores.length; index++) {
    suma =suma + index;
}
console.log("la suma de los numero es ..."+suma);
console.log("la media de los numeros es..." +  parseFloat(suma/(array_valores.length)));

/** hacer un programa que muestre todos los numeros que hay entro 2 numeros introducidos .. :D */

var numero1 = parseInt(prompt("Introduce un numero..."));
var numero2 = parseInt(prompt("Introduce el segunto numero ..."));
var inicializador = 1;
while(numero1 < numero2 - 1){
    numero1  = numero1 + inicializador;
    console.log("El numero es ..." + numero1);
}

//metodos de busqueda

var texto = "los tres chanchitos vs los tres perritos";

var text2 = "Coronavirus en Peru".toUpperCase();

var plantilla_html = `
    <h1>Bryan alonso </h1>
    <h2>El nombre de la persona es ${texto}</h2>
    <h3>Estamos jodidos por el coronarivus ${text2}</h3>
    `
var array1 = ["hola","mundo","bryan","alonso","almeyda","contreras"];

// foreach
array1.forEach( (element,indice) =>{
    document.write(
        "<li>"+indice+element+"</li>"
    )
});

/**  pida 6 numeros por pantalla y meta en un array
 * mostrar el array entero en el cuerpo de la pagina y consola
 * ordenarlo y mostrarlo
 * invertir el orden y mostrarlo
 * mostrar cuantos elelemtnos tiene el array
 * busqueda de un valor introducido por el usuario **/
 i = 0;
 var array_numeros = [];
 do{
    var numero = parseInt(prompt("Introduce un numero"));
    array_numeros.push(numero);
    i = i + 1 ;
 }while( i < 5);

 var structura_html = `
    <h1>${array_numeros}</h1>
 `;
 document.write(structura_html);
 console.log("Numeros en el array");
 console.log(array_numeros);

// poner en modo estricto para utilizar otros modulos de javasctipt
'use strict'

var obj = document.getElementById("boton");
obj.addEventListener('click',function (){
    console.log("asdasda");
},false);

// palabras reservadas 
let prueba = "hola";
const ip_addres = "172.19.216.30";
var edad = "12"
switch (edad) {
    case "12":
        console.log("la edad es 12");
        break;
    case "13":
        console.log("El edad es 13");
        break;    
    default:
        console.log("xd no cumple con las condiciones");
        break;
}
xd = 0;
do {
    console.log(xd);
    xd ++;
} while (xd != 20);

// ajax

function addPreloader(){
    let preloader = document.querySelector("#preloader");
    if ( !preloader) {
        var load_preloader = "<p>Cargando la previa</p>";
        document.querySelector(body).innerHtml = load_preloader;
    }
}

function removePreloader() {  
    let preloader = document.querySelector("#preloader");
    if(preloader){
        preloader.remove();
    }
}

