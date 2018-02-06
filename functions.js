/* eslint-disable no-alert, no-console, no-undef,  */
//no-unreachable

isEven = function isEven(number)
{
    return number % 2 == 0;
}
console.log(isEven(4));
console.log(isEven(5));

console.log(global.isEven(6));



function sayHello()
{
    console.log("Hello World");
}
sayHello();

function areEqual(a, b)
{
    return a == b;
}
var res = areEqual(3, 4);
console.log(res);
console.log(areEqual(4, 4));



function silly()
{
    return;
    console.log("Never");
}
silly();




var myObj = { name : "Jonas"};
myObj.show = function()
{
    console.log(this.name);
}
myObj.show();


function doStuff(msg)
{
    console.log(msg);
}

function makeItDoItsStuff(work, msg) {
    work(msg);
}

makeItDoItsStuff(doStuff, "doStuff printed this");

s = new String("Hello");

console.log(s[0]);
