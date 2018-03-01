/* eslint-disable no-alert, no-const-assign, no-console, no-unused-vars, no-redeclare, no-func-assign */
// /*eslint no-var: "error"*/
// /*eslint-env es6*/

//"use strict";

// const globalC = "global.globalC";
// let scopedC = "global: let scopedC";

// {
//     let globalC = "localC";
//     var varBlockC = "varBlockC";
//     undeclaredBlockC = "undeclaredBlockC";
//     let scopedC = "block scoped: scopedC";
//     let blockC = "blockC";
//     console.log(scopedC);

// }
// var varScopedC = "global: varScopedC";
// var printScope;
// function scoped() {
//     let scopedC = "scopedC";
//     var varScopedC = "scoped(): varScopedC";
//     this.varScopedC = "this.varScopedC";
//     //var printScope = function (){
//     function printScope(){
//         undeclaredPrintScope = "undeclaredPrintScope";
//         console.log("\n\n\n############### printScope() ##############");

//         console.log("scopedC " + scopedC);
//         console.log("this.varScopedC " + this.varScopedC);
//         console.log("varScopedC " + varScopedC);
//         console.log("globalC " + globalC);
//         console.log("############################################\n\n");
//     };
//     printScope();
//     return printScope;
// }
// var printScoped = scoped();
// printScope();

// printScoped();
// console.log(scopedC);
// console.log(globalC);
// console.log("varScopedC " + varScopedC);
// console.log(undeclaredBlockC);
// console.log(undeclaredPrintScope);

// console.log(varBlockC);
//console.log(blockC);


//var square = function (x) {
//console.log(square(12));


function calculateAreaOfSquare(widthHeight)
{
    square = widthHeight * widthHeight;
    return square;
}

console.log(calculateAreaOfSquare(10));

const square = function (x){
    return x * x;
};

console.log(square(12));


// var myName;
// var mySirname;

// printName(myName, mySirname);

// myName = "Jonas";
// mySirname = "Brandel";

// function printName(nombre, apellido)
// {
//     console.log(nombre + " " + apellido);
// }

