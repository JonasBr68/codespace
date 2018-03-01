
function printUntil(number, max) {
    if (number <= max) {
        console.log(number);
        printUntil(number + 1, max);
    }
    else
        return;
}
printUntil(1, 10);

function sumNtoM(n, m) {
    if (n == m)
    {
        return m; //No hay nada mas que sumar, la suma de n a n = n
    }
    else
    {
        //suma n y la suma del resto de los numero n+1 hasta m
        return n + sumNtoM(n + 1, m);
    }
}




console.log(sumNtoM(1,8000));






// sumNtoM(1,6)
// 1 + sumNtoM(1 + 2, 6)
// 1 + 2 + sumNtoM(1 + 2, 6)
// 1 + 2 + 3 + sumNtoM(1 + 3, 6)
// 1 + 2 + 3 + 4 + sumNtoM(1 + 4, 6)
// 1 + 2 + 3 + 4 + 5 + sumNtoM(1 + 5, 6)
// 1 + 2 + 3 + 4 + 5 + 6 = 21

// sumNtoM(n, m)
// n + sumNtoM(n + 1, m)
// n + (n + 1) + sumNtoM(n + 2, m)
// n + (n + 1) + (n + 2) + sumNtoM(n + 3, m)
//...
// n + (n + 1) + (n + 2) ... + (m - 1) + sumNtoM((m - 1) + 1, m)


const lista = ["This", "should", "become", "a", "sentence"];

function makeString(pos, lista) {
    if (pos == lista.length) {
        return "";
    }
    else
    {
        return lista[pos] + " " + makeString(pos + 1, lista);
    }
}

console.log(makeString(0, lista));
