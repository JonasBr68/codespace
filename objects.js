

var myObj = {}; //literal

myObj.name = "Jonas";

myObj.age = 50;



console.log(myObj.name + " tiene " + myObj.age + " años");



var myObj2 = { name : "Josema", age: 51 };



console.log(myObj2.name + " tiene " + myObj2.age + " años");

whereAmI = "Hello, am on the global object";
var andMe = "Im here";
console.log(global.whereAmI);

function show()
{
    console.log(andMe);
    console.log(module.andMe);
}

show();

global.hereAlso = "Also global";
console.log(hereAlso);



