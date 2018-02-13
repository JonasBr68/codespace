//"use strict";
/* eslint-disable no-alert, no-console, no-undef, no-unused-vars */

var isStrict = (function() { return this == undefined; })();
var isThisIsGlobal = (function() { return this === global; })();

// console.log(isStrict);
// console.log(isThisIsGlobal);

function printImpares(arr)
{
    while (pos < arr.length) {
        console.log(arr[pos]);
        pos++;
    }
}

function printPares(arr)
{
    pos = 0;
    while (pos < arr.length) {
        console.log(arr[pos] + 1);
        pos++;
    }
}

var numbers = [1,3,5,7,9,11,13,15];


printPares(numbers);
printImpares(numbers);


//Scope and hoisting

//process.exit(0);

// function printName(name)
// {
//     console.log(name);
// }

console.log(typeof myname); //Only visible if var which is hoisted
console.log(typeof printName);


//myname("Jonas");

var myname = function (name) //Function expression
{
    console.log(name);
};

printName("Jonas");
myname("Josema");

function printName(name) //Function declaration
{
    console.log(name);

    myname = function () { console.log("jonas"); };
}

//printName(someName);  //Not defined
printName(jonasName); //Value undefined

var jonasName = "Jonas";
let someName = "Other";
printName(jonasName);
printName(someName);


someFunction();

function someFunction()
{
    otherFunction();
}

//var otherFunction = function ()
function otherFunction()
{
    console.log("otherFunction");
}