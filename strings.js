


function invertirPalabra(palabraOriginal) {

    var palabraNueva = "";
    var posCaracterActual = palabraOriginal.length - 1;

    while (posCaracterActual >= 0)
    {
        palabraNueva += palabraOriginal[posCaracterActual];
        posCaracterActual--;
    }
    return palabraNueva;

}



console.log(invertirPalabra("Cebra"));














/* eslint-disable no-alert, no-console */
var myString = "Jonas Brandel";


function reverse(inputString) {
    //var inputArr = [].concat(inputString);
    //var inputArr2 = [...inputString]; //Breaks string into array of characters
    var outputString = [];
    var o = 0;
    for (var i = inputString.length - 1; i >= 0; i--) {
        outputString[o] = inputString[i];
        o++;
    }
    return outputString.join("");
}

console.log(reverse(myString));




