const isEven = (element)=>{
    if((element/2 - Math.ceil(element/2))!=0) return false;
    else return true;
}


/*---------------------------------------------------------------
    Heap algorithm - recursive - permutations without repetition
    pointer - initially anyArray.length
    anyArray - array of elements subject of permutations
    newArray - empty array that holds the results of permutations
-----------------------------------------------------------------*/

const heapPerm = (pointer, anyArray, newArray)=>{
    if(pointer==1){
       // console.log(anyArray)
        newArray.push([...anyArray]);
    }
    else{
        heapPerm(pointer - 1, anyArray, newArray);

        for(let i=0; i<pointer-1; i++){
            if(isEven(pointer)){
                //swap(a[0]) i a[k-1]
                let temp = anyArray[pointer-1];
                anyArray[pointer-1] = anyArray[0];
                anyArray[0] = temp;
            }
            else{
                //swap(a[i]) i a[k-1]
                let temp = anyArray[pointer-1];
                anyArray[pointer-1] = anyArray[i];
                anyArray[i] = temp;
            }
            heapPerm(pointer - 1, anyArray, newArray);
        }
    }
}


/*-------------------------------------------------------------------
    Heap algorithm - iterative - permutations without repetition
    pointer - initially Array.length
    anyArray - array of elements subject of permutations
    return - arrays of array of permutated items
---------------------------------------------------------------------*/

const heapPermIterative = (pointer, anyArray)=>{
    let result = [];

    let c = [];
    for(let i=0; i<pointer; i++) c[i]=0;

    //console.log(anyArray);
    result.push([...anyArray]);

    let i=0;
    while(i < pointer){
        if(c[i] < i){
            if(isEven(i)){
                let temp = anyArray[i];
                anyArray[i] = anyArray[0];
                anyArray[0] = temp;
            }
            else{
                let temp = anyArray[i];
                anyArray[i] = anyArray[c[i]];
                anyArray[c[i]] = temp;
            }
            //console.log(anyArray);
            result.push([...anyArray]);

            c[i] += 1;
            i = 0;
        }
        else{
            c[i] = 0;
            i += 1;
        }
    }
    return result;
}


/*
    Binary combination algorithm
*/

const stringAND = (par1, par2)=>{
    //par1 is a character i.e. 'a', 'e', 'A', 'F'
    //par 2 is a character only '0' or '1'
    if(par2 === '1') return par1
    else return '0';
}

/*
    Binary combination algorithm
    anyArray - array of elements to be combinated, all possible combinations
    combAll - returns an array of arrays all possible combinations
    direction - 'f' from first element, 'b' from last element
*/
const combAll = (anyArray, direction)=>{
    let resultArray = [];
    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)
    let arrLength = anyArray.length;
    let num_of_combinations = Math.pow(2, arrLength) - 1;   

    let tempArray = [];
    if(direction==='f') tempArray = [...anyArray]
    else tempArray=[...anyArray.reverse()];

    for(let i = 1; i < num_of_combinations+1; i++){
        //console.log(i, Number(i).toString(2).split(""));
        let compareString = Number(i).toString(2).split("").reverse();          
        let result = [];
        for(let j = 0; j < arrLength; j++){
            stringAND(tempArray[j], compareString[j])!=0 ? result.push(tempArray[j])  : null;
        }
        resultArray.push(result.reverse());
    }

    return resultArray;
}


/*
    Binary combination algorithm
    anyArray - array of elements to be combinated, all possible combinations
    combAllStrict - returns an array of arrays all possible combinations
    direction - 'f' from first element, 'b' from last element
    length - length of the combination array,
    strict - if true exact length false max length
*/
const combAllStrict = (anyArray, direction, length, strict)=>{
    let resultArray = [];
    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)
    let arrLength = anyArray.length;
    let num_of_combinations = Math.pow(2, arrLength) - 1;   

    let tempArray = [];
    if(direction==='f') tempArray = [...anyArray]
    else tempArray=[...anyArray.reverse()];

    for(let i = 1; i < num_of_combinations+1; i++){
        //console.log(i, Number(i).toString(2).split(""));
        let compareString = Number(i).toString(2).split("").reverse();          
        let result = [];
        for(let j = 0; j < arrLength; j++){
            stringAND(tempArray[j], compareString[j])!=0 ? result.push(tempArray[j])  : null;
        }
        if(strict){
            if(result.length===length) resultArray.push(result.reverse());
        }
        else{
            if(result.length<=length) resultArray.push(result.reverse());
        } 
    }

    return resultArray;
}

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

module.exports = {
    'heapPerm' : heapPerm,
    'heapPermIterative' : heapPermIterative,
    'combAll' : combAll,
    'combAllStrict' : combAllStrict,
    'fib' : fibonacci,
    'makeRangeIterator' : makeRangeIterator,
    'makeRangeIterator2' : makeRangeIterator2
}