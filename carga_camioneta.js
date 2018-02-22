/* eslint-disable no-alert, no-console, no-undef */


var queue = [123, 342, 23, 211, 23, 435, 44, 332, 224, 543, 7];

function howManyRuns(queueOfWeights) {
    var loadActual = 0;
    const maxWeight = 550;
    var runsNeeded = 0;
    for (let i = 0; i < queueOfWeights.length; i++) {
        if (loadActual + queueOfWeights[i] <= maxWeight) {
            //Podemos cargar ese tambien
            loadActual += queueOfWeights[i];
        }
        else {
            //No podemos cargar ese
            runsNeeded++; //Necesita otra vuelta
            loadActual = queueOfWeights[i]; //Empezamos una nuva carga con ese
        }
    }
    return runsNeeded;
}
console.log(howManyRuns(queue));


function sortWeights(weights)
{
    var arrSorted = weights.sort((a, b) => { return b - a;});
    return arrSorted;
}

function optimizeRuns(queue)
{
    var heavyFirst = sortWeights(queue);

    var comboMap = [];

    var nextCombo = getCombo(heavyFirst, comboMap);
    

}

function getCombo(heavyFirst, comboMap, currentCombo)
{
    for (let pos = 0; pos < heavyFirst.length; pos++) {
        if(comboMap[pos] == undefined)
        {
            //Not used, find the biggest next pairing that fits
            var currentComboSize = 0;
            for(let s=heavyFirst.length - 1;s>pos;s--)
            {
                if(comboMap[s] == undefined)
                {
                    //Unused, does it fit
                    unfinished...
                    if(heavyFirst[s] + heavyFirst[pos] <= 550)
                    {
                        currentComboSize = 
                        //usalo
                        comboMap[pos] = currentCombo;
                        comboMap[s] = currentCombo;
                    }
                }
            }
        }
        
    }
}

console.log(sortWeights(queue));


