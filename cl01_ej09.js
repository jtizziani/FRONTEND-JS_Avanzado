/*
9  Crear una función flecha que reciba un parámetro que indique el momento del día: 
   “Mañana, tarde, noche” y en base a eso de un saludo personalizado. Ejemplo: “Buenos 
   días, buenas tardes, buenas noches”.


10 Mostrar del siguiente array los nombres que comiencen con “M”.
    let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor",
    "Macarena","Flavio"]
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

const fecha = new Date();
let saludo;

if (fecha > 6 || fecha <= 12){
    saludo = "dias";
}else if (fecha > 12 || fecha <= 20){
    saludo = "tardes";
}else if (fecha > 20 || fecha <=00 || fecha > 00 || fecha <= 6){
    saludo = "noches";
}

let text = `Buenos ${saludo}`;
alert(text);
console.log(fecha);