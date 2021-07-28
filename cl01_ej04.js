/*
4  Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:
    let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"]

*/


const frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"];

const nombreFruta = frutas.map(function(frutaIndividual){
    alert(frutaIndividual);
    return frutaIndividual;
});
console.log(nombreFruta);





