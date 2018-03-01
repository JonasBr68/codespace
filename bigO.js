/* eslint-disable indent, no-alert, no-unused-vars, no-console, no-undef */



// O(1) Constant
function isFirstElementNull(array)
{
    return array[0] == null;
}


// O(n) Proportional, linear
function containsValue(elements, value)
{
    elements.forEach(element => {
        if (element == value) return true;
    });
    return false;
}


// O(n*n) Grows with square of input size - naive brute force
function containsDuplicates(elements)
{
    for (var outer = 0; outer < elements.length; outer++)
    {
        for (var inner = 0; inner < elements.length; inner++)
        {
            // Don't compare with self
            if (outer == inner) continue; //continue with next iteration in loop

            if (elements[outer] == elements[inner]) return true;
        }
    }
    return false;
}


//O(2^n) Exponential, grows with 2 raised by n (exponent)
function fibonacci(number) // 0,1,1,2,3,5,8,13,21...
{
    if (number <= 1) return number;

    return fibonacci(number - 2) + fibonacci(number - 1);
}