
const obj = {
    hello: 'world',
    arr: [1, 2, 3, 4],
    subObj: {
        a: true,
        b: null
    }
};

let { hello, arr, subObj: { b } } = obj;
let { subObj : renamedSubObj  } = obj;

console.log(hello); // world
console.log(b); // null
console.log(renamedSubObj.a);
