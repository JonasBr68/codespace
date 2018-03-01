/* eslint-disable indent, no-alert, no-unused-vars, no-console, no-undef */

myFor(1, 11, (i) => {
    console.log(i);
});


let myArr = ["first", 2, 3, "fourth"];

myFor(0, myArr.length, (i, arr) => {
    console.log(arr[i]);
}, myArr);

myWhile((obj, max) => {
    if (obj.counter < max) {
        console.log(obj.counter++);
        return true;
    }
    else {
        return false;
    }
}, { counter: 0 }, 20);

myWhile((arr) => {
    let next = arr.shift();
    if (next != undefined) {
        console.log(next);
        return true;
    }
    else {
        return false;
    }


}, myArr);

function myFor(start, max, doThis, ...rest) {
    let i = start;
    if (i < max) {
        doThis(i, ...rest);
        myFor(i + 1, max, doThis, ...rest);
    }
}


function myWhile(doThisWhileReturnTrue, ...rest) {
    if (doThisWhileReturnTrue(...rest)) {
        myWhile(doThisWhileReturnTrue, ...rest);
    }
}

