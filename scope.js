/* eslint-disable no-alert, no-undef, no-const-assign, no-console, no-unused-vars, no-redeclare, no-func-assign */

const lg = require("./simple_module");
lg("Hello");

// Function scope

function createAnimal(name, weight) {
  
    
    if(weight != undefined && name != undefined)
    {
        const newAnimal = createAnimal(name, weight);
    }

    function createAnimal(name, weight) {
        //Bug Bug newAnimal should not exist and throw error
        newAnimal = { name, weight };
        return newAnimal;
    }

    return newAnimal;
}
//var a = Animal("Cat", 23);
//console.log(a.name + " " + a.weight);


function scope(start)
{
    if(start != undefined)
    {
        let counter = start;
        let c = 0;
    }
    while(counter < 10)
    {
        console.log(counter);
        c += counter;
        counter++;
    }
    return c;
}
scope();
