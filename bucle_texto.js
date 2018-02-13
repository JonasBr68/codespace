/* eslint-disable no-alert, no-console, no-undef */

var outText = "";

for(var c = 0;c<7;c++)
{
    outText += "#";
    console.log(outText);
}






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
     
    