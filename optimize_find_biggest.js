"use strict";
/* eslint-disable no-alert, no-console, no-undef */

function rangeArray(start, end) {
    let arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

const rand = new Random();

function Random() {
    return {
        Next: function (num) {
            let res = Math.random() * num;
            return Math.floor(res);
        }
    };
}

function scrambleArray(arrIn) {
    let scrambled = [];
    for (let index = 0; index < arrIn.length; index++) {
        let randomPos = rand.Next(arrIn.length);
        while (scrambled[randomPos] != undefined) {
            randomPos = rand.Next(arrIn.length);//Find a non used pos
        }
        // ASSERT(arrIn[index] != undefined);
        scrambled[randomPos] = arrIn[index];
    }
    // ASSERT(arrIn.length == scrambled.length);
    return scrambled;
}


const size_for_test = 10000; //10,000 to 10,000,000

//let testArr = Array(size_for_test).fill(1);
const testArr = [1, 2, 3, 11, 0, 5, 8, 9, 21, 12, 10];
//let range = rangeArray(1, size_for_test);
//let testArr = scrambleArray(range);

function myLog(arg)
{
    console.log(arg);
}

myLog(...testArr);
let myO = { first:1,second:2};
let my2 = { here: [...myO]};

myLog(my2);

measureFunctionX(findBiggestC,testArr);


measureFunction("findBiggestC", () => {
    return findBiggestC(testArr);
});


measureFunction("findBiggestB", () => {
    return findBiggestB(testArr);   
});

measureFunction("findBiggestA", () => {
    return findBiggestA(testArr);
});


function findBiggestC(list)
{
    let biggest = 0;
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if(element > biggest)
            biggest = element;
    }
    return biggest;
}


function findBiggestB(list)
{
    let biggest = 0;
    for (let index = 0; index < list.length; index++) {
        if(list[index] > biggest)
            biggest = list[index];
    }
    return biggest;
}

function findBiggestA(lista)
{
    var biggest = 0;
    var current = lista.shift();
    while(current != undefined)
    {
        if(current > biggest)
            biggest = current;
        current = lista.shift();
    }
    return biggest;
}

function measureFunctionX(funcToMeasure, ...args)
{
    let start = Date.now();
    var result = funcToMeasure(...args);
    let stop = Date.now();
    
    console.log(funcToMeasure.name + " took: " + (stop - start));
    console.log(funcToMeasure.name + " returned " + result);
}


function measureFunction(label, funcToMeasure)
{
    let start = Date.now();
    var result = funcToMeasure();
    let stop = Date.now();
    
    console.log(label + " took: " + (stop - start));
    console.log(label + " returned " + result);
}

