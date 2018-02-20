/* eslint-disable no-alert, no-console, no-undef */

// for (var counter = 0; counter < 15; counter++) {
//     //hacer algo
//     console.log(counter);
// }

// var pos = 0;
// for(;pos < 10;)
// {
//     if(pos > 10)
//         break;
//     pos++;
// }

// console.log(pos);

// //Ejercicio 1
// //Con un bucle for imprime en la consola todos números impares hasta 31 incluido
// for(var i=1;i<=31;i++)
// {
//     if(i % 2 != 0)
//         console.log(i);
// }

//Ejercicio 2
//Tienes un Array con nombres como esta:
var nombres = ["Mary", "Ana", "Belinda", "Maria"];
//Con un bucle for encuentra todos los nombres que empieza con 'M'
//y imprime las en la consola.

// for (let index = 0; index < nombres.length; index++) {
//     const nombre = nombres[index];
//     if(nombre[0] == "M")
//         console.log(nombre);
// }


function reverse(arrIn) {
    var arrReversed = [];
    for (var i = arrIn.length - 1; i >= 0; i--) {
        const element = arrIn[i];
        arrReversed.push(element);
    }
    return arrReversed;
}

console.log(reverse(nombres));


function validateReverse(arrOriginal, arrInverted) {
    if (arrOriginal.length != arrInverted.length)
        return false;

    var posStartOriginal = 0;
    var posStartInverted = arrInverted.length - 1;

    for (let desvio = 0; desvio < arrOriginal.length; desvio++) {
        var posActualOriginal = posStartOriginal + desvio;
        var posActualInverted = posStartInverted - desvio;

        var elementoOriginal = arrOriginal[posActualOriginal];

        var elementoInverted = arrInverted[posActualInverted];
        if (elementoOriginal != elementoInverted) {
            return false;
        }
    }

    return true;
}

console.log(validateReverse(nombres, reverse(nombres)));
console.log(validateReverse(nombres, nombres));



