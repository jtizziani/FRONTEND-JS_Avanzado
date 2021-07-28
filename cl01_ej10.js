/*
10 Mostrar del siguiente array los nombres que comiencen con “M”.
    let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor",
    "Macarena","Flavio"]

*/

let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor",
"Macarena","Flavio"]

const personasM = personas.filter(nombre => nombre.charAt() === "M");

console.log(personasM);
