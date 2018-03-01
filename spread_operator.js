

var arr = [ "first", 2, "third", 4];

function print(first, second, third, fourth)
{
    console.log([first, second, third, fourth]);
    console.log([...arguments]);
    
}

print(...arr);
printRest(arr[0], ...arr.slice(1));

function printRest(first, ...rest)
{
    console.log([first, ...rest]);
    console.log([...arguments]);
    
}