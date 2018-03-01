/* eslint-disable no-alert, no-undef, no-const-assign, no-console, no-unused-vars, no-redeclare, no-func-assign */

module.exports = {
    lg: function (msg) {
        console.log(msg);
    },
    sum: function(a, b)
    {
        return a + b;
    }
};


const my = require("./simple_module");

my.lg("Hello");
const sum = my.sum(4, 5);