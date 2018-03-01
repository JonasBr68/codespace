"use strict";
/* eslint-disable no-alert, no-console, no-undef */

function ASSERT(expr, msg) {
    if (expr == undefined)
        throw "undefined is a valid expression";
    if (!expr)
        throw msg || expr;
}

//const Orders = { Increment: 0, Decrement: 1 };

const toSort = [1, 2, 3, 0, 5, 8, 9, 21, 11, 12, 10];
Object.freeze(toSort);

// region mySorting
function sort(arrToSort) {
    let sortedArray = [];

    let startNode = initialScan(arrToSort);

    //console.log("arrToSort: \n" + arrToSort);

    //console.log("initialScan: \n" + startNode.toArray());



    let nodeToSort = startNode;
    while (nodeToSort) {
        nodeToSort = nodeToSort.sortYourSelf();
    }

    sortedArray = startNode.toArray();

    if (sortedArray.length != arrToSort.length)
        throw "Not even the same length!";
    return sortedArray;
}

//Find the biggest, add to linked list
//returned should be biggest
function initialScan(arrToSort) {
    let biggest;
    let lastNode;
    let previousValue;
    let orderDecrementing = 0;
    let orderIncrementing = 0;
    for (let index = 0; index < arrToSort.length; index++) {
        let currentNode = new Node(index, arrToSort[index]);
        if (previousValue == undefined) {
            previousValue = currentNode.value;
        }
        else {
            if (previousValue > currentNode.value)
                orderDecrementing++;
            else
                orderIncrementing++;
        }
        if (biggest == undefined) {
            biggest = currentNode;
            lastNode = biggest;
        } else {
            if (currentNode.value > biggest.value) {
                currentNode.tail(biggest);
                lastNode = biggest;
                biggest = currentNode;
            }
            else {
                lastNode.push(currentNode);//Add last in linked list
                lastNode = currentNode;
            }
        }
    }
    biggest.preferDecrementingOrder = orderDecrementing >= orderIncrementing;
    return biggest;
}

function NodeX(position, value) {
    //ASSERT(value != undefined);
    let newNode = {
        value: value,
        position: position,
        preferDecrementingOrder: true,
        _tail: null,
        _head: null,
        sortYourSelf() {
            let nextToSortItself = this.tail();
            let currentHead = this.head();
            while (currentHead && this.value > currentHead.value) {
                currentHead = currentHead.head();
            }
            if (currentHead && currentHead !== this)
                currentHead.insertAfter(this);
            return nextToSortItself;
        },
        insertBefore(insertedNode) {
            //ASSERT(insertedNode);
            let previousHead = this.head();
            insertedNode.tail(this);
            insertedNode.head(previousHead);
        },
        insertAfter(insertedNode) {
            // ASSERT(insertedNode);
            // ASSERT(insertedNode.value < this.value);

            if (insertedNode != this.tail()) {
                // ASSERT(insertedNode.value > this.tail().value);
                let previousThisTail = this.tail();
                let previousHead = insertedNode.head();
                if (previousHead)
                    previousHead.tail(insertedNode.tail()); //Remove insertedNodeFrom chain
                this._tail = insertedNode;
                insertedNode._head = this;
                insertedNode.tail(previousThisTail);
            }
        },
        tail(tailNode) {
            if (tailNode !== undefined) {
                if (!this._tail || (this._tail != tailNode)) {
                    let oldTail = this._tail;
                    this._tail = tailNode;
                    if (this._tail) {
                        this._tail.head(this);
                    }
                    return oldTail;
                }
                else
                    return this._tail;
            }
            else
                return this._tail;
        },
        head(headNode) {
            if (headNode != undefined) {
                if (!this._head || (this._head != headNode)) {
                    let oldHead = this._head;
                    this._head = headNode;
                    if (this._head) {
                        this._head.tail(this);
                    }
                    return oldHead;
                }
                else
                    return this._head;
            }
            else
                return this._head;

        },
        toArray() {
            let newArray = [];
            let currentNode = this;
            while (currentNode) {
                newArray.push(currentNode.value);
                currentNode = currentNode.tail();
            }
            return newArray;
        },
        push(node) {
            let current = this;
            while (current.tail()) {
                current = current.tail();
            }
            current.tail(node);
        }
    };
    Object.seal(newNode);
    return newNode;
}

function Node(position, value) {
    this.value = value;
    this.position = position;
    this.preferDecrementingOrder = true;
    this._tail = null;
    this._head = null;
}

Node.prototype.sortYourSelf = function () {
    let nextToSortItself = this.tail();
    let currentHead = this.head();
    while (currentHead && this.value > currentHead.value) {
        currentHead = currentHead.head();
    }
    if (currentHead && currentHead !== this)
        currentHead.insertAfter(this);
    return nextToSortItself;
};

Node.prototype.insertBefore = function (insertedNode) {
    //ASSERT(insertedNode);
    let previousHead = this.head();
    insertedNode.tail(this);
    insertedNode.head(previousHead);
};

Node.prototype.insertAfter = function (insertedNode) {
    // ASSERT(insertedNode);
    // ASSERT(insertedNode.value < this.value);

    if (insertedNode != this.tail()) {
        // ASSERT(insertedNode.value > this.tail().value);
        let previousThisTail = this.tail();
        let previousHead = insertedNode.head();
        if (previousHead)
            previousHead.tail(insertedNode.tail()); //Remove insertedNodeFrom chain
        this._tail = insertedNode;
        insertedNode._head = this;
        insertedNode.tail(previousThisTail);
    }
};
Node.prototype.tail = function (tailNode) {
    if (tailNode !== undefined) {
        if (!this._tail || (this._tail != tailNode)) {
            let oldTail = this._tail;
            this._tail = tailNode;
            if (this._tail) {
                this._tail.head(this);
            }
            return oldTail;
        }
        else
            return this._tail;
    }
    else
        return this._tail;
};
Node.prototype.head = function (headNode) {
    if (headNode != undefined) {
        if (!this._head || (this._head != headNode)) {
            let oldHead = this._head;
            this._head = headNode;
            if (this._head) {
                this._head.tail(this);
            }
            return oldHead;
        }
        else
            return this._head;
    }
    else
        return this._head;

};

Node.prototype.toArray = function () {
    let newArray = [];
    let currentNode = this;
    while (currentNode) {
        newArray.push(currentNode.value);
        currentNode = currentNode.tail();
    }
    return newArray;
};

Node.prototype.push = function (node) {
    let current = this;
    while (current.tail()) {
        current = current.tail();
    }
    current.tail(node);
};

// endregion

// region Merge Sort

//const toSort = [1, 2, 3, 0, 5, 8, 9, 21, 11, 12, 10];



function mergeSort(toSort)
{
    var toSortArray = [...toSort];
    if(toSort.length < 2)
        return toSort;
    //even sized arrays
    //Divide in two
    var left = toSortArray.slice(0, Math.round(toSortArray.length/2));
    var right = toSortArray.slice(Math.round(toSortArray.length/2));
    
    var leftSorted = mergeSort(left);
    var rightSorted = mergeSort(right);

    var result = merge(leftSorted, rightSorted);
    return result;
}

function merge(leftSorted, rightSorted)
{
    let merged = [];
    let leftRemoved = 0;
    let rightRemoved = 0; 
    while(leftSorted.length - leftRemoved > 0 && rightSorted.length - rightRemoved > 0)
    {
        if(leftSorted[0] <= rightSorted[0])
            merged.push(leftSorted[leftRemoved++]);
        else
            merged.push(rightSorted[rightRemoved++]);
    }
    while(leftSorted.length - leftRemoved > 0)
    {
        merged.push(leftSorted[leftRemoved++]);
    }
    while(rightSorted.length - rightRemoved > 0)
    {
        merged.push(rightSorted[rightRemoved++]);
    }
    return merged;
}

// endregion

function rangeArray(start, end) {
    let arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

const rand = new Random();

function Random() {
    return {
        Next: function (num) {
            let res = Math.random() * num;
            return Math.floor(res);
        }
    };
}


function scrambleArray(arrIn) {
    let scrambled = [];
    for (let index = 0; index < arrIn.length; index++) {
        let randomPos = rand.Next(arrIn.length);
        while (scrambled[randomPos] != undefined) {
            randomPos = rand.Next(arrIn.length);//Find a non used pos
        }
        // ASSERT(arrIn[index] != undefined);
        scrambled[randomPos] = arrIn[index];
    }
    // ASSERT(arrIn.length == scrambled.length);
    return scrambled;
}

var sortingAlgo = mergeSort;

let range = rangeArray(1, 1000000);
let randomRange = scrambleArray(range);

//console.log(randomRange);
let sortedCorrect = [...randomRange];
let startJS = Date.now();
sortedCorrect.sort((a, b) => { return b - a; });
let stopJS = Date.now();

console.log("JS took: " + (stopJS - startJS));

let mySorted = sortingAlgo(randomRange); //In case of jitting

let startMy = Date.now();
mySorted = sortingAlgo(randomRange);
let stopMy = Date.now();

console.log("My took: " + (stopMy - startMy));

// var mergeSorted = mergeSort(toSort);
// console.log(mergeSorted);


//console.log("mySorted:\n" + mySorted);
console.log(compareArrays(sortedCorrect, mySorted));
function compareArrays(expected, actual) {
    if (expected.length != actual.length) {
        return false;
    }
    for (let index = 0; index < expected.length; index++) {
        if (actual[index] != expected[index])
            return false;
    }
    return true;
}