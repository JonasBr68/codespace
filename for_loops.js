/* eslint-disable no-alert, no-console, no-undef */

for (var counter = 0; counter < 15; counter++) {
    //hacer algo
    console.log(counter);
}

var pos = 0;
for(;pos < 10;)
{
    if(pos > 10)
        break;
    pos++;
}

console.log(pos);

//Ejercicio 1
//Con un bucle for imprime en la consola todos números impares hasta 31 incluido
for(var i=1;i<=31;i++)
{
    if(i % 2 != 0)
        console.log(i);
}

//Ejercicio 2
//Tienes un Array con nombres como esta:
var nombres = ["Mary", "Ana", "Belinda", "Maria"];
//Con un bucle for encuentra todos los nombres que empieza con 'M'
//y imprime las en la consola.

for (let index = 0; index < nombres.length; index++) {
    const nombre = nombres[index];
    if(nombre[0] == "M")
        console.log(nombre);
}