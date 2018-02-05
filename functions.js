

isEven = function isEven(number)
{
    return number % 2 == 0;
}
console.log(isEven(4));
console.log(isEven(5));

console.log(global.isEven(6));






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