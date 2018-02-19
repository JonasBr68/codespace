/* eslint-disable no-alert, no-console, no-undef */

var myArrayOfStrings = ["First", "Second", "Third", "Fourth", "Fifth"];
var myArrayOfNumbers = [100, 345, 121, 4, 5];



console.log(myArrayOfStrings[2]); // "Third"
console.log(myArrayOfNumbers[0]); // 100


var myArray = []; //Array vacio

myArray.push("First");

console.log(myArray[0]);

var myNumArray = []; //100, 345, 121, 4, 5
console.log(typeof myNumArray);

myNumArray[0] = 100;
myNumArray[1] = 345;
myNumArray[2] = 121;
myNumArray[3] = 4;
myNumArray[4] = 5;
myNumArray[6] = 6;

console.log(myNumArray[0]);
console.log(myNumArray[5]);


var myDays = ["Martes", "Miércoles", "Jueves"];
console.log(myDays[0]);

myDays.unshift("Lunes"); // unshift(...) agrega en primera posicion
console.log(myDays[0]);

var myEmpty = [];
myEmpty.unshift("Only");
console.log(myEmpty[0]);

var obj = { Martes: 2 };
var name = "Martes";
console.log(obj["Martes"]);
console.log(obj[name]);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

for (let index = arr.length; index >= 0; index--) {
    const element = arr[index];
    console.log(element);
}

var names = ["Jonas", "Jose", "Paco", "Josema"];
for (pos = 0; pos < names.length; pos++) {
    if (names[pos] == "Paco")
        break;
}
console.log("Paco esta en posición " + pos);


var array2d = [[8, -2, 4], [1, 0, 5]];

console.log(array2d[0][1]);
