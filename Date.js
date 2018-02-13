/* eslint-disable no-alert, no-console, no-undef */


var ahora = new Date();
console.log(ahora);
console.log(ahora.toLocaleTimeString());
console.log(ahora.getDate());
console.log(ahora.getMonth());

var current = Date.now();
console.log(current);



console.log("Empezar la espera...");
wait(5);
console.log("Termino la espera...");
wait(1);
console.clear();

function wait(X)
{
    var now = Date.now();
    const limit = now + (X * 1000);
    while(now < limit)
    {
        now = Date.now();
    }
}

