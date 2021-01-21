const { performance } = require('perf_hooks');
const { heapPerm, combAll, heapPermIterative } = require('./utils.common-js.js');

let nizOrigin  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let niz = [...nizOrigin];

let heapPermResultArray = [];
let startTime = performance.now();
heapPerm(niz.length, niz, heapPermResultArray);
let endTime = performance.now();
console.log(endTime - startTime, 'num_of_permutations :', heapPermResultArray.length);

startTime = performance.now();
let heapPermInterativeResultArray = heapPermIterative(niz.length, niz)
endTime = performance.now();
console.log(endTime - startTime, 'num_of_permutations :', heapPermInterativeResultArray.length);

startTime = performance.now();
let BinaryCombinations = combAll(niz, 'f');
endTime = performance.now();
console.log(endTime - startTime, 'num_of_permutations :', BinaryCombinations.length);
