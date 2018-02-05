/* eslint-enable */
/* eslint-disable no-alert, no-console, no-undef */
var app = require(__dirname + "\\app.js");
//Object.prototype.valueOf = function() { return 50; }

app.pp("Via app");
app.pp(myFileName);
app.pp(typeof myHiddenName);

PP("Hello");
pp("Global pp");



function Age(age)
{
    this.value = age;
}
Age.prototype.toString = function()
{
    return this.value.toString();
};

var yourAge = new Age(10);
var myAge = new Age(40);

pp(myAge);
pp(myAge + 1);
pp(yourAge);
pp(yourAge + 1);


class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

}

var me = new Person("Jonas", 50);
pp(me.name);

class Range
{
    constructor(from,to)
    {
        this.from = from;
        this.to = to;
    }
    *[Symbol.iterator]()
    {
        var current = this.from;
        while(current <= this.to)
        {
            yield current++;
        }
    }
}

Range.prototype.toString = function()
{
    return "Im a Range";
};

var r = new Range(10, 20);
for (let key of r) {
    pp(key);
}

function range(from, to)
{
    return new Range(from, to);
}

function sum(theRange) {
    let sum = 0;
    for (let value of theRange) {
        sum += value;
    }
    return sum;
}

pp(sum(range(1,10)));
