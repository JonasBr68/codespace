/* eslint-disable no-alert, no-console */
//install TS compiler
//npm install -g typescript


function oddNumber(num:number) {
    return num % 2 != 0;
}

function evenNumber(num:number) {
    return num % 2 == 0;
}

console.log("oddNumber tests\n\n");
console.log(oddNumber(5));

//console.log(oddNumer(true));
// console.log(oddNumer(false));
// console.log(oddNumer("false"));
// console.log(oddNumer("5"));
// console.log(oddNumer("Five"));
// console.log(oddNumer("Six"));

//mutli cursor, add below CTRL+ALT+ARROW_DOWN
//reset CTRL+click

console.log("evenNumber tests\n\n");

console.log(evenNumber(8));

// console.log(evenNumber(true));
// console.log(evenNumber(false));
// console.log(evenNumber("false"));
// console.log(evenNumber("5"));
// console.log(evenNumber("Five"));
// console.log(evenNumber("Six"));
