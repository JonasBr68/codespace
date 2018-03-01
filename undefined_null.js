

var test1 = -1;
function withUndefined() {
    for (let i = 0; i < 100000000; i++) {
        if(test1 === i)
        {
            console.log(i);
        }
    }
}

measureFunction("undefined", withUndefined);

function measureFunction(label, funcToMeasure) {
    let start = Date.now();
    funcToMeasure();
    let stop = Date.now();

    console.log(label + " took: " + (stop - start));
}
