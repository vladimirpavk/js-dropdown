let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return{
            next(){
                pre = cur;
                cur = pre + cur;
                return {
                    done: false,
                    value: cur
                }
            }
        }
    }
}

const makeRangeIterator = (start = 0, end = Infinity, step = 1) =>{
    let nextIndex = start;
    let iterations = 0;

    const rangeIterator = {
        next: ()=>{
            if(nextIndex <= end){
                let result = {
                    value: nextIndex,
                    done: false
                }
               nextIndex+=step; 
               iterations++; 
               return result;     
            }
            return{
                value: iterations,
                done: true
            }
        }
    }

    return rangeIterator;
}

function* makeRangeIterator2(start = 0, end = Infinity, step = 1){
    iterationCounter = 0;

    for(let i = start; i < end; i+=step){
        iterationCounter++;
        yield i;
    }

    return iterationCounter;
}

const fact = (n)=>{
    if(n>=1) return n*fact(n-1);
    else return 1;
}

const fib = (n)=>{
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

const fibMemo = (n, memo = {})=>{
    if(n in memo) 
    {
        return memo[n];
    }

    if(n<=2) return 1;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

const gridWalker = (m, n)=>{
    if(m===0 || n===0) return 0;
    if(m==1 && n==1) return 1;
    return gridWalker(m-1, n) + gridWalker(m, n-1);
}

const gridWalkerMemo = (m, n, memo = {})=>{
    let key = m+','+n;  
    if(key in memo){
        return memo[key];
    }

    if(m==1 && n==1) return 1;
    if(m===0 || n===0) return 0;
            
    memo[key] = gridWalkerMemo(m-1, n, memo) + gridWalkerMemo(m, n-1, memo);
    return memo[key];
}

const sumArrayRecursive = (sumArray, sum = 0, pointer)=>{
    if(n < 0 || pointer==0) return sum;
    return sum+sumArrayRecursive(sumArrayRecursive[pointer--], sum, pointer);
}

const sumArray = (sumArray)=>{
    let sum = 0;
    for(let i = 0; i<sumArray.length-1; i++)  sum+=sumArray[i];
}

const canSumRecursive = (target, numbers)=>{
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        if( canSum(targetSum-num, numbers) === true ) return true;
    }

    return false;
}

const howSum = (targetSum, numbers, memo={})=>{
    if(targetSum in memo) return memo[targetSum];

    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        remainder = targetSum-num;
        const returnArray = howSum(remainder, numbers, memo);
        if(returnArray != null){
            memo[targetSum] = [...returnArray, num];;
            return memo[targetSum];
        }
    }

    memo[target] = null;
    return memo[targetSum];    
}

const bestSum = (targetSum, numbers)=>{
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestComb = null;

    for(let num of numbers){
        let returnArray = bestSum(targetSum-num, numbers);
        if(returnArray!==null){
            const combination = [...returnArray, num];
            if(shortestComb===null || combination.length < shortestComb.length){
                shortestComb=combination;
            }
        }
    }

    return shortestComb;
}

const bestSumMemo = (targetSum, numbers, memo = {})=>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestComb = null;

    for(let num of numbers){
        let returnArray = bestSumMemo(targetSum-num, numbers, memo);
        if(returnArray!==null){
            const combination = [...returnArray, num];
            if(shortestComb===null || combination.length < shortestComb.length){
                shortestComb=combination;
            }
        }
    }

    memo[targetSum] = shortestComb;
    return shortestComb;
}
module.exports = {    
    'fib2' : fibonacci,
    'makeRangeIterator' : makeRangeIterator,
    'makeRangeIterator2' : makeRangeIterator2,
    'fact': fact,
    'fib': fib,
    'fibMemo' : fibMemo,
    'gridWalker': gridWalker,
    'gridWalkerMemo': gridWalkerMemo,
    'howSum': howSum,
    'bestSum': bestSum,
    'bestSumMemo': bestSumMemo
}