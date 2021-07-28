/*
Ejercicios ECMAScript 6

3  Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el 
   resultado por consola.
*/

mayorQue=(a,b) => {
    if (a > b){
        return 'a es mayor que b';
    }else if (a < b){
        return 'a es menor que b';
    }else if (a = b){
        return 'a es igual que b';
    }
};


let a = parseFloat(prompt("ingrese un valor a"));
let b = parseFloat(prompt("ingrese un valor b")); 

alert(mayorQue(a,b));