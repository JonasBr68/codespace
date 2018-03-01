
let measure = require("measure-duration");
//0,1,1,2,3,5,8,13,21,34,55

function fibbonacciRecursive(nth)
{
    if(nth < 2)
        return nth;
    else{
        return fibbonacciRecursive(nth - 2) + fibbonacciRecursive(nth - 1);
    }
}

function fibbonacciSequenceRecursive(lastInSequence)
{
    var seq = [];
    for(let i = 0; i<=lastInSequence; i++)
    {
        seq.push(fibbonacciRecursive(i));
    }
    return seq;
}




function fibbonacciIterative(sequenceSize)
{
    var previous = 0;
    var current = 1;
    var next;
    var fibbonacciArr = [];
    while(fibbonacciArr.length <= sequenceSize)
    {
        next = previous + current;
        fibbonacciArr.push(previous);
        previous = current;
        current = next;        
    }
    return fibbonacciArr;
}

const max = 42;

measure(fibbonacciRecursive, max);
var fibbArr = measure(fibbonacciIterative, max);
console.log(fibbArr[max]);
console.log(measure(fibbonacciSequenceRecursive, max)[max]);



