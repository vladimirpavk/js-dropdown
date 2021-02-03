const { performance } = require('perf_hooks');
console.log(require('./utils.common-js.js'));
const 
{ 
    heapPerm,
    combAll,
    heapPermIterative,
    combAllStrict    
} = require('./utils.common-js.js');

const {    
    fib2,
    makeRangeIterator,
    makeRangeIterator2,
    fact,
    fib,
    fibMemo,
    gridWalker,
    gridWalkerMemo,
    howSum
} = require('./dynamic.common-js');

let nizOrigin  = ['a', 'b', 'c', 'd', 'e'];
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

startTime = performance.now();
let BinaryCombinationsStrict = combAllStrict(niz, 'f', 3, true);
endTime = performance.now();
console.log(endTime - startTime, 'num_of_permutations :', BinaryCombinationsStrict.length);

startTime = performance.now();
//fib(50);
endTime = performance.now();
console.log('Fibonacchi non-optimized...',  endTime-startTime);

startTime = performance.now();
fibMemo(50);
endTime = performance.now();
console.log('Fibonacchi optimized...',  endTime-startTime);

startTime = performance.now();
//console.log(gridWalker(20,100));
endTime = performance.now();
console.log('gridWalker non-optimized...',  endTime-startTime);

startTime = performance.now();
console.log(gridWalkerMemo(1920, 1080));
endTime = performance.now();
console.log('gridWalker optimized...',  endTime-startTime);



//console.log(gridWalker(200, 100));

console.log(howSum(7, [2,3]));