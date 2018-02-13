/* eslint-disable no-alert, no-console, no-undef */

var outText = "";

for(var c = 0;c<7;c++)
{
    outText += "#";
    console.log(outText);
}

return;




var rectangle = 
    "\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    "     **********\n" +
    "     *        *\n" +
    "     *        *\n" +
    "     *        *\n" +
    "     *        *\n" +
    "     **********\n";

console.log(rectangle);



function indentation(indent) {
    var result = "";
    for (var i = 0; i < indent; i++) {
        result += " ";
    }
    return result;
}


var rectangle2 = 
    "\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    indentation(10) + "     **********\n" +
    indentation(10) + "     *        *\n" +
    indentation(10) + "     *        *\n" +
    indentation(10) + "     *        *\n" +
    indentation(10) + "     *        *\n" +
    indentation(10) + "     **********\n";





console.log(rectangle2);


function indentedRectangle(indent)
{
    var rectangleIndented = 
    "\n" + 
    "\n" + 
    "\n" + 
    "\n" + 
    indentation(indent) + "     **********\n" +
    indentation(indent) + "     *        *\n" +
    indentation(indent) + "     *        *\n" +
    indentation(indent) + "     *        *\n" +
    indentation(indent) + "     *        *\n" +
    indentation(indent) + "     **********\n";

    return rectangleIndented;
}

function wait(millis)
{
    var now = Date.now();
    const limit = now + (millis);
    while(now < limit)
    {
        now = Date.now();
    }
}
console.clear();
     
for(var loops = 0;loops<20;loops++)
{
    console.log(indentedRectangle(loops));
    wait(500);
    console.clear();
}