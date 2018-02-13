"use strict";
/* eslint-disable no-alert, no-console, no-undef, no-unused-vars */


var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function isOdd(value)
{
    return value % 2 != 0;
}

function printResultIfTrue(arr, expFunction)
{
    var pos = 0;
    while (pos < arr.length) {
        if(expFunction(arr[pos]))
            console.log(arr[pos]);
        pos++;
    }
}

console.log("\n\nPrimer Numbers");
printResultIfTrue(numbers, isPrime);

console.log("\n\nOdd Numbers");
printResultIfTrue(numbers, isOdd);
