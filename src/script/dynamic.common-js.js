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
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

module.exports = {    
    'fib2' : fibonacci,
    'makeRangeIterator' : makeRangeIterator,
    'makeRangeIterator2' : makeRangeIterator2,
    'fact': fact,
    'fib': fib,
    'fibMemo' : fibMemo
}