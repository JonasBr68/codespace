// @ts-nocheck
/* eslint-disable */
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
function isEven(number){
    //We expect a integer number
    if(!(typeof number == typeof 0 
        && Number.isInteger(number))) //ES6
    {
        throw "Not a number";
    }
    // It would be enough to check if the least significant bit is 0 to mean
    // it is  divisable by 2, but probably doesnt matter

    //For now we use modulo 2, and check that there is no remainder
    return number % 2 == 0;
}

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

console.log(isEven(148));
console.log(isOdd(155));
console.log(isEven("Four"));
