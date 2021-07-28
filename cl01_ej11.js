/*
11 Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings 
   cuando corresponda:
        a) function despedir (nombre){
                console.log("Adios" + nombre) }
        b) function cobrar (monto,pago){
                return monto - pago;}
                console.log("Su vuelto es: " cobrar(monto,pago))
        c) function saludar () {
                console.log("Hola")}


*/

despedir = nombre => console.log("Adios "+nombre);    
cobrar = (monto,pago) => monto - pago;         

let nombre = prompt("ingrese su nombre");
despedir(nombre);

let monto = 10000;
let pago = 9000;
const saludo = `Hola ${nombre}`;

console.log("Su vuelto es: "+cobrar(monto,pago));
console.log(saludo);

