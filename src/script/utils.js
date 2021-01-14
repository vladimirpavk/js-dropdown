const { performance } = require('perf_hooks');

let nizOrigin  = ['a', 'b', 'c', 'd', 'e', 'f'];
let niz = [...nizOrigin];

const isEven = (element)=>{
    if((element/2 - Math.ceil(element/2))!=0) return false;
    else return true;
}

/*
    Heap algorithms - https://en.wikipedia.org/wiki/Heap%27s_algorithm
*/
/*---------------------------------------------------------------
    Heap algorithm - recursive - permutations without repetition
    pointer - initially Array.length
    anyArray - array of elements subject of permutations
    result is stored in outer global scope variable newArrayRecursive
-----------------------------------------------------------------*/
/*const newArrayRecursive = [];
const perm = (pointer, anyArray)=>{
    if(pointer==1){
       // console.log(anyArray)
        newArrayRecursive.push([...anyArray]);
    }
    else{
        perm(pointer - 1, anyArray);

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
            perm(pointer - 1, anyArray);
        }
    }
} 
perm(niz.length, niz, newArrayRecursive);
*/

/*---------------------------------------------------------------
    Heap algorithm - recursive - permutations without repetition
    pointer - initially Array.length
    anyArray - array of elements subject of permutations
    newArray - empty array that holds the results of permutations
-----------------------------------------------------------------*/
const newArrayRecursive = [];
const perm = (pointer, anyArray, newArray)=>{
    if(pointer==1){
       // console.log(anyArray)
        newArray.push([...anyArray]);
    }
    else{
        perm(pointer - 1, anyArray, newArray);

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
            perm(pointer - 1, anyArray, newArray);
        }
    }
}

const startTime = performance.now();
perm(niz.length, niz, newArrayRecursive);
//console.log('new array', newArray);
const endTime = performance.now();
console.log(endTime - startTime);

Date.now();

/*-------------------------------------------------------------------
    Heap algorithm - recursive - permutations without repetition
    pointer - initially Array.length
    anyArray - array of elements subject of permutations
    result is stored in outer global scope variable newArrayRecursive
---------------------------------------------------------------------*/
const permIterative = (pointer, anyArray)=>{
    let c = [];
    for(let i=0; i<pointer; i++) c[i]=0;

    console.log(anyArray);

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
            console.log(anyArray);

            c[i] += 1;
            i = 0;
        }
        else{
            c[i] = 0;
            i += 1;
        }
    }
}

permIterative(niz.length, niz);