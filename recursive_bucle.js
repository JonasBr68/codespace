



function doWhileLessThan(current, max, func) {
    if (current >= max) {
        return;
    }
    if (current % 1000 == 0)
        func(current);
    doWhileLessThan(current + 1, max, func);
}

doWhileLessThan(0, 5001, console.log);