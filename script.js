// Aqui voy a ir anotando mis discursos mentales

/* Pa empezar: Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Aqui mi cabeza dice, ya valio. Mi logica dice, declarar un array que contenga los numeros, obteniendolos desde un prompt. 
Pero como no se si eso es posible, obtendre primero los numeros en una variable unica. */

let numeros = prompt("Ingresa 3 numeros");

/* Como no se si funciono, voy a imprimir para ver que paso. Como lo supuse, nadaaaa. Se cancela todo, si aprecio algo. */

console.log(numeros);

/* Ahora. Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor. */

/* Para esto, ahora si ocupo, segun mi logica, un array para poder poseteriormente convertirlos cada uno en variables y analizarlos. */
//Aqui se que se puede convertir esto en array, usando caracteres o elementos los cuales nos ayuden a dividir lo que recibimos
//Usare la documentacion para saber como.

/* Hay varios metodos, pero creo que usare .split */
const arrayNumeros = numeros.split(",");

/* Se le pedira al usuario que ingrese los numeros por ","  */

/* Verificamos que tenemos */

console.log(arrayNumeros);

/* Exactamente como lo pense, de aqui parten varias cosas: Como pasarlos a numeros, ya que se reflejan como string, 
si el usuario mete mas de 3 o menos de 3 numeros, que solo meta numeros... etc.
  */

/* Vamos por pasos, primero, pasar cada numero a una variable y ahi determinar su tipo primitivo */
/* Ire a la documentacion. Para esto veo que debemos de destructurar */

const [primerDato, segundoDato, tercerDato] = arrayNumeros;

/* Validamos */

console.log(primerDato);
console.log(segundoDato);
console.log(tercerDato);

/* Hacemos que el tipo de dato verdaderamente sea un tipo number valido para el ejercicio */

num1 = parseInt(primerDato);
num2 = parseInt(segundoDato);
num3 = parseInt(tercerDato);

/* Siguiendo con lo que pide el programa. Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor. */

/* Aqui iniciaria una funcion con la cual realizar lo que se pide */

const ordenamiento = (num1,num2,num3) => {

    if(num1 > num2 && num1 > num3){
        const numeroMayor = num1
        if(num2 > num3){
            const numeroMedio = num2
            const numeroMenor = num3         
        }else{const numeroMedio = num3
              const numeroMenor = num2
               
        } 
    }
return console.log(`${numeroMedio} , ${numeroMedio}, ${numeroMayor}`)
}

console.log(ordenamiento(num1,num2,num3))
