const { performance } = require('perf_hooks');

let nizOrigin  = ['a', 'b', 'c', 'd', 'e', 'f'];
let niz = [...nizOrigin];

const startTime = performance.now();
//perm(niz.length, niz, newArrayRecursive);
//console.log('new array', newArray);
const endTime = performance.now();
console.log(endTime - startTime);

Date.now();

console.log(permIterative(niz.length, niz));