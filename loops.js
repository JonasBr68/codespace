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
while(pos < numberOfItems)
{
    console.log(myList[pos]);
    pos++;
}