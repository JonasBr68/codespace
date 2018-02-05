/* eslint-enable */
/* eslint-disable no-alert, no-console */

function odd(num) {
    return num % 2 != 0;
}

function even(num) {
    return num % 2 == 0;
}


console.log(odd(true));
console.log(odd(false));
console.log(odd("false"));
console.log(odd("5"));
console.log(odd("Five"));
console.log(odd("Six"));

//mutli cursor, add below CTRL+ALT+ARROW_DOWN
//reset CTRL+click

console.log("\n\n");


console.log(even(true));
console.log(even(false));
console.log(even("false"));
console.log(even("5"));
console.log(even("Five"));
console.log(even("Six"));
