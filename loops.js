/* eslint-disable no-alert, no-console, no-undef */

var counter = 0, sum = 0;

while (counter < 10) {

    sum += counter++;
}
console.log(sum);

var numberOfItems = 0;
var myList = {};
myList[numberOfItems++] = "First";
myList[numberOfItems++] = "Second";
myList[numberOfItems++] = "Third";
myList[numberOfItems++] = "Fourth";

var pos = 0;
while (pos < numberOfItems) {
    console.log(myList[pos]);
    pos++;
}

var myArray = ["First", "Second", "Third", "Fourth"];
pos = 0;

while (pos < myArray.length) {
    console.log(myArray[pos]);
    pos++;
}

var hello = "Hello";
var firstLetter = hello[0];
console.log(firstLetter); // H
pos = 0;
while(pos < hello.length)
{
    console.log(hello[pos++]);
}


var arr = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}