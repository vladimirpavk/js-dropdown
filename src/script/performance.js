const { performance } = require('perf_hooks');
console.log(require('./utils.common-js.js'));
const 
{ 
    heapPerm,
    combAll,
    heapPermIterative,
    combAllStrict,
    fib,
    makeRangeIterator,
    makeRangeIterator2
} = require('./utils.common-js.js');

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

for(let n of fib){
    if(n > 1000) break;
    console.log(n);
}

const it = makeRangeIterator(0, 100, 5);

let result = it.next();
while(!result.done){   
    console.log(result.value);
    result = it.next();
}
console.log('Num of iterations ', result.value);

const rit = makeRangeIterator2(0, 100, 3);

for(let x of rit) console.log(x);

const lib = (n, call)=>{
    if(n<=1) return;
    console.log(n, call);
    lib(n-2, 'first call');
    lib(n-2, 'second call');
}

console.log(lib(8, 'start'));