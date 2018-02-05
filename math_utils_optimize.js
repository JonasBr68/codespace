// @ts-check


/**
 *  @file With various utility and helper functionality
 *  @author Jonas Brandel
 */


 /** lib_version = Current version of this file
  * @constant
    @type {number} 
    @default
*/ 
const lib_version = 1;


 /**
  * Function that tells if a integer is an even number
  * @example
 * // returns true
 * isEven(22);
  * @param {number} number - An integer number to check if number is even
  */
var isEven = function (number){
    // It would be enough to check if least significant bit is 0 to mean
    // it is  divisable by 2
    // but doubt it would make a difference
    // var lastDigit = number & 1;
    // return !lastDigit;
    return number % 2 == 0;
}

console.log(isEven(148));


/**
  * Function that tells if a integer is an odd number
  * @example
 * // returns false
 * isEven(22);
  * @param {number} number - An integer number to check if number is odd
  */
function isOdd (number){
    //TODO - This should use an expression instead of invoking a function, which has a higher cost!
    return !isEven(number);
}


var isEvenFast = function (number){
    // It would be enough to check if least significant bit is 0 to mean
    // it is  divisable by 2
    // but doubt it would make a difference
    return !(number & 1);
    //return number % 2 == 0;
}

var oddCounter = 0;
var evenCounter = 0;
const SLOW_EVEN = "SLOW_EVEN";
console.time(SLOW_EVEN);
for (let index = 0; index < 100000000; index++) {
    var res = isEven(index);
    if (res) {
        evenCounter++;
    }
    else {
        oddCounter++;
    }
}
console.timeEnd(SLOW_EVEN);
console.log(evenCounter);
console.log(oddCounter);

const FAST_EVEN = "FAST_EVEN";
evenCounter = 0;
oddCounter = 0;
console.time(FAST_EVEN);
for (let index = 0; index < 100000000; index++) {
    var res = isEvenFast(index);
    if (res) {
        evenCounter++;
    }
    else {
        oddCounter++;
    }
}
console.timeEnd(FAST_EVEN);
console.log(evenCounter);
console.log(oddCounter);

console.log(isEven(148));
