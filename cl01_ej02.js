/*
Ejercicios ECMAScript 6

2  Crear una función flecha que reciba dos números y muestre la suma de ellos.

*/

let a = parseFloat(prompt("ingrese un valor a"));
let b = parseFloat(prompt("ingrese un valor b")); 
let suma = (a,b)=>a + b
alert("La suma de a= "+a+" mas la suma de b= "+b+" es: "+suma(a,b))


