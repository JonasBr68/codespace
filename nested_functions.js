// constructor style
function root() {
    console.log("Executing root");

    this.toString = function () {
        return "I'm a root";
    }
    this.name = "root object";
}

//returns an object
function root2() {

    
    console.log("Executing root2");
    console.log(this.constructor.name);
    
    var obj = {
        toString: function () {
            return "I'm a root";
        },
        name: "root object"
    }
    obj.name += " 3";
    return obj;
}


var myRoot = new root();
var myR = root();
var myRoot2 = root2();
var myRoot3 = new root2();

console.log(myRoot.toString());
console.log(myRoot.name);
console.log(myRoot2.toString());
console.log(myRoot2.name);
console.log(myRoot3.toString());
console.log(myRoot3.name);
// console.log(myR.toString());
// console.log(myR.name);



var myNumber = Number();
var mySecond = new Number();

console.log(myNumber);
console.log(mySecond);


