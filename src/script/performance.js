const { performance } = require('perf_hooks');
const { heapPerm, comb } = require('./utils.common-js.js');

let nizOrigin  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let niz = [...nizOrigin];

let resultArray = [];
comb(niz, resultArray);

/* const startTime = performance.now();
heapPerm(niz.length, niz, resultArray);
const endTime = performance.now();
console.log(endTime - startTime, 'num_of_permutations :', resultArray.length); */