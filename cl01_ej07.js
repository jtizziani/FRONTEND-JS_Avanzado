/*
7  Mostrar por pantalla los números mayores a 100 del siguiente array.
    let numeros = [160,23,120,60,1,-10,8,9483]



De esta forma tambien funciona !!! 

        let numeros = [160,23,120,60,1,-10,8,9483];
        const mayor100 = numeros.filter(numero => numero > 100); 
        alert(mayor100);

*/

let numeros = [160,23,120,60,1,-10,8,9483];


function logArrayElements(element, index, array) {
    if (element > 100){
        console.log("a[" + index + "] = " + element);
    }
    
}

numeros.forEach(logArrayElements);