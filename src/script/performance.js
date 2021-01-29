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
    fibMemo
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

console.log(fibMemo(50));

console.log(fact(150));