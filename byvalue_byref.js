/* eslint-disable no-alert, no-console, no-unused-vars, no-redeclare */





var startNumber = 0;
function addToNumber(number, addition)
{
    startNumber += addition;
}
addToNumber(0, 21);
console.log(startNumber);





// var startObj = { start:0 };
// function addToObject(obj, addition)
// {
//     obj.start += addition;
// }
// addToObject(startObj, 31);
// console.log(startObj.start);



var startObj = { start:0 };
function addToObject(obj, addition)
{
    obj = { start : -1 };
}
addToObject(startObj, 31);
console.log(startObj.start);



function myFunc(a, b , c)
{
    return a + b + c;
}

function myFunc()
{    
    var a = arguments[0]; // El valor en el primer parámetro
    var b = arguments[1]; // El valor en el segundo parámetro
    var c = arguments[2]; // El valor del tercer parámetro
    return a + b + c;
}


// console.log(myFunc1(10, 20, 30));
// console.log(myFunc2(10, 20, 30));



var myObject = { name:"This is my object1"};

var myObjectReference = myObject;

console.log(myObjectReference.name);

myObjectReference.name = "Also my object2";

console.log(myObject.name);

console.log(myObject === myObjectReference);



