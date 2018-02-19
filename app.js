/* eslint-disable no-alert, no-console, no-unused-vars */
// pp = prettyP;
// // pp('Wasn\'t that nice');
// // pp(50 + " años");

// // function add(a, b)
// // {
// //     return a + b;
// // }

// // var nothing;
// // pp(typeof(nothing));
// // pp(nothing == undefined);
// // pp(nothing === undefined);
// // pp(-3.14 / 0);
// // pp(typeof(typeof(null)));
// // pp(typeof(undefined));
// // pp(typeof(null));
// // pp(typeof(NaN));
// // pp(8 * null);
// // pp(true == 1);

// //#region stuff to hide

// //Hide this

// //#endregion

// //region
// // Hide this too
// //endregion

// //https://github.com/Microsoft/TypeScript/wiki/JsDoc-support-in-JavaScript
// //http://usejsdoc.org/
// /**
//  * Pretty prints our output to console.log with the data type in square brackets
//  * @param {*} printThis - printThis: The thing you want pretty printed with type
//  */
// function prettyP(printThis) {
//     var msg = "";
//     if (typeof (printThis) == typeof ("")) {
//         msg = '"' + printThis + '"';
//     } else {
//         if (typeof printThis == typeof undefined) {
//             msg = printThis;
//         } else {
//             msg = printThis.toString();
//         }
//     }
//     var separation = getRequiredTabs(msg, 40);
//     msg += " [" + typeof (printThis) + "] ";
//     console.log(msg);
//     return this;
// }

// prettyP.prototype.toString = function () {
//     return "prettyPrettyPlease";
// }


// PP = prettyP;
// function getRequiredTabs(msg, desiredTabPosition) {
//     return "\t";
// }

// myFileName = __filename;
// var myHiddenName = myFileName;
// module.exports.pp = pp;

// var str = "str";
// var num = 123;
// var bo = true;
// var nu = null;
// var undef = undefined;
// var mo = {}; //Object literal

// mo.doStuff = function (msg) {
//     console.log(msg);
// }

// mo.doStuff("Hello world");

// mo["doStuff"]("Hi Again");

// mo["send"] = mo.doStuff;

// mo.send("Weird");

// var send = mo["doStuff"];

// send("This too");

// var abuelo = {};
// abuelo.child = {};
// abuelo.child.grandchild = { name: "Bobby" };

// console.log(abuelo.child.grandchild.name);

// console.log(abuelo["child"]["grandchild"].name);

// abuelo.children = [];

// abuelo.children.push("Emma");
// abuelo.children.push("Johnny");

// abuelo.children = [...abuelo.children, "Joselito"];

// for (let index = 0; index < abuelo.children.length; index++) {
//     const element = abuelo.children[index];
//     console.log(element);
// }

// // console.log(Object.getOwnPropertyNames(null));
// // console.log(Object.getOwnPropertyNames(undefined));


// var o = new prettyP();
// console.log(typeof o);
// console.log(o.constructor.name);

// var p = new PP();
// console.log(p.constructor.name);

// var XX = function () {
//     console.log("Hello Im XX");
// }
// var xx = new XX();
// console.log(xx.constructor.name);

// console.log(typeof prettyP);
// console.log(prettyP.constructor.name);

// console.log(Math.constructor.name);

// console.log(typeof Math);


// var m = Math;
// console.log(m.prototype);

// console.log(o);
// pp(o);
// console.log(o.toString());
// console.log(prettyP.prototype.toString.call(o));


// var processed = [];
// console.log(JSON.stringify(p, jsonFilter));


// function jsonFilter(key, value) {
//     if (undefined != processed.find(function (item) {
//         return (item === value);
//     })) {
//         return undefined; //Already did this one
//     }
//     processed.push(this); //Remember it
//     return value;

// }

// var boo = new Boolean("true");
// console.log(boo == true);
// console.log(boo === true);
// console.log('"' + boo + '"');
// console.log(0xFFFFFFFF & boo);
// console.log((true && "Hello"));

// console.log(0xFFFFFFFF & !!"Hello");
// console.log(0xFFFFFFFF & "Hello");
// console.log();


// console.log(boo instanceof Boolean);
// console.log(typeof boolean);

// //console.log(boo instanceof boolean);
// //console.log(true instanceof boolean);




// var mock = {};

// mock[0] = 1;
// mock[1] = 2;
// mock.current = 0;

// mock[Symbol.iterator] = function () {
//     return {
//         next: function () {
//             if (this.owner[this.current] == undefined)
//                 return { done: true }

//             return { done: false, value: this.owner[this.current++] }
//         },
//         current : 0,
//         owner : this
//     }
// }

// var mock = [...mock, 3, 4];

// console.log(mock.length);


// var mock = {
//     get length()
//     {
//         return Object.getOwnPropertyNames(this).length.valueOf() - 1;
//     },
//     1 : "Second position"
// };


// mock[0] = 1;
// mock[2] = 3;

// console.log(mock);

// console.log(mock.length);

// console.log('Real array');

// for (let index = 0; index < mock.length; index++) {
//     const element = mock[index];
//     console.log(element);

// }

// console.log('Mock array');

// for (let index = 0; index < mock.length; index++) {
//     const element = mock[index];
//     console.log(element);

// }


// console.log((3).constructor.name);
// console.log(typeof (3));
// console.log(typeof 3);
// console.log(3 instanceof Number);
// console.log((3) instanceof Number);


// var obj1 = new Object();
// console.log(typeof obj1);

// var func2 = new Function();
// console.log(typeof func2);

// var strO = new String();
// console.log(typeof strO);
// console.log(strO instanceof String);
// console.log(strO instanceof Function);
// console.log(strO instanceof Object);

// console.log(func2 instanceof Object);
// console.log(func2 instanceof Function);

// var ppO = new prettyP();
// console.log(typeof ppO);
// console.log(ppO instanceof Object);
// console.log(ppO instanceof Function);
// console.log(ppO instanceof prettyP);
// console.log(ppO.constructor.name);

// console.log(prettyP.constructor.name);



// console.log(typeof prettyP);
// console.log(prettyP instanceof Object);
// console.log(prettyP instanceof Function);
// console.log(prettyP instanceof prettyP);

// prettyP = undefined;
// console.log(Function.prototype.toString.call(ppO.constructor));



// function simple()
// {
//     return "simple";
// }

// simple2 = function simple3()
// {
//     return "simple3";
// }
// console.log(simple);
// console.log(simple.name);
// console.log(simple2);
// console.log(simple2.name);

// global.myCoolName = 'Cool';

// console.log(myCoolName);

// console.log(typeof global);
// console.log(global);

// console.log(global instanceof Array);


// var mycallableObj = {
//     n : "callable"
// };

// // mycallableObj.prototype.n = {};
// // mycallableObj.prototype.n.call = function(thisX)
// // {
// //     return thisX.n;
// // };

// //mycallableObj.call(mycallableObj);

// console.log(typeof mycallableObj);

// var strLetra = String.fromCharCode(65);
// console.log(strLetra);

// var numA = "A".charCodeAt(0);
// console.log(numA);


// var nameRaw = "Jonas";
// var nameObj = new String(nameRaw);
// console.log(nameRaw == nameObj);
// console.log(nameRaw === nameObj);

// var nameLegth = ("Jonas").length;
// console.log(nameLegth);

// var oName = new String("Jonas");
// console.log("My name has " + oName.length + " characters");

// var oAge = new Number(50);
// console.log("Mi age is " + oAge);
// console.log(oAge.toExponential(0));
// console.log((50).toExponential(0));

// console.log(typeof String);

function getPosition() {
    return { x: 0, y: 0 };
}

function getSize() {
    return { width: 10, height: 10 };
}

function drawHorizontalLine(line) {
    console.log("\tDrawing horizontal line");
}

function drawVerticalLine(line) {
    console.log("\tDrawing vertical line");
}

function paintRectangle(position, size) {
    var topLine = { x: position.x, y: position.y, length: size.width };
    var bottomLine = {
        x: position.x,
        y: position.y + size.height,
        length: size.width
    };

    var leftLine = { x: position.x, y: position.y, length: size.height };
    var rightLine = {
        x: position.x + size.width,
        y: position.y,
        length: size.height
    };
    drawHorizontalLine(topLine);
    drawHorizontalLine(bottomLine);
    drawVerticalLine(leftLine);
    drawVerticalLine(rightLine);
}


var positionOfRectangle = getPosition(); //Tómalo como dado
var sizeOfRectangle = getSize();         //Tómalo como dado

paintRectangle(positionOfRectangle, sizeOfRectangle);


//Variable shadowing and scope 

var var1 = "Im global";

var var2 = "Also global";

function myFunc(var1)
{
    console.log(var1);
}
myFunc();

function myFunc2()
{
    console.log(var2);
}
myFunc2();

function myFunc3()
{
    var var1 = "Im in myFunc3";
    console.log(var1);
}
myFunc3();

console.log(var1);

function myFunc4()
{
    var1 = "Im in myFunc4";
    console.log(var1);
    
}
myFunc4();
console.log(var1);

function myFunc5()
{
    var5 = "From myFunc5";
    console.log(var5);
    
}
myFunc5(); //Move to after log call
console.log(var5);

console.log(var5);

function danger()
{
    console.log("Danger");
}

danger = function () { console.log("Safe");
}

danger();


class Animal
{
    constructor (name)
    {
        this.name = name;
    }
}

var cat = new Animal("Cat");
console.log(typeof cat);
console.log(cat instanceof Animal);
console.log(cat.__proto__.constructor.name);

console.log(cat.name);


function FizzBuzz()
{
    for(let num = 1;num<=100;num++)
    {
        if(num % 3 == 0 && num % 5 == 0)
        {
            console.log("FizzBuzz");
            
        } else if(num % 3 == 0)
        {
            console.log("Fizz");
        } else if(num % 5 == 0)
        {
            console.log("Buzz");
            
        } else{
            console.log(num);
            
        }
    }
}
FizzBuzz();

function chessBoard()
{
    const x = 32;
    const y = 16;
    let result = "";
    let oddLine = 1;
    for(let i = 0;i<x*y;i++)
    {
        if((i) % x==0)
        {
            //start fresh line
            result += "\n";
            oddLine = oddLine ^ 1;
        }
        if((i + oddLine) % 2 == 0)
            result += " ";
        else
            result += "█";
    }
    return result;
}
console.log(chessBoard());