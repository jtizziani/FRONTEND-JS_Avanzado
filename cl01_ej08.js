/*
8  Generar en base a un array, un nuevo array que tenga todos sus números consecutivos,
   y otro con sus números precedentes. (Ejemplo: Si el número es 8 : En el array de 
    consecutivos irá 9 , y en el array de precedentes irá 7). Al final mostrar por 
    pantalla los tres array formados.
    
    let numeros = [15,28,32,40,11,-3,0,100]
*/


let numeros = [15,28,32,40,11,-3,0,100];

const consecutivos = numeros.map(conse => conse + 1);
const precedentes = numeros.map(prese => prese - 1);

console.log(numeros);
console.log(consecutivos);
console.log(precedentes);


