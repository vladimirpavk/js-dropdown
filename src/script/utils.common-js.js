const isEven = (element)=>{
    if((element/2 - Math.ceil(element/2))!=0) return false;
    else return true;
}


/*---------------------------------------------------------------
    Heap algorithm - recursive - permutations without repetition
    pointer - initially Array.length
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

const comb_2 = (anyArray, resultArray)=>{
    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)
    let arrLength = anyArray.length;
    let num_of_combinations = Math.pow(2, arrLength) - 1;

    let revArray = anyArray.reverse();

    for(let i = 1; i < num_of_combinations+1; i++){
        //console.log(i, Number(i).toString(2).split(""));
        let compareString = Number(i).toString(2).split("").reverse();        
        let result = [];
        for(let j = 0; j < arrLength; j++){
            stringAND(revArray[j], compareString[j])!=0 ? result.push(revArray[j])  : null;
        }
        console.log(result.reverse());
    }
}

const comb = (anyArray, resultArray)=>{
    //anyArray.length-1, num_of_combinations = 2^(anyArray.length-1)
    let arrLength = anyArray.length;
    let num_of_combinations = Math.pow(2, arrLength) - 1;   

    for(let i = 1; i < num_of_combinations+1; i++){
        //console.log(i, Number(i).toString(2).split(""));
        let compareString = Number(i).toString(2).split("").reverse();        
        let result = [];
        for(let j = 0; j < arrLength; j++){
            stringAND(anyArray[j], compareString[j])!=0 ? result.push(anyArray[j])  : null;
        }
        console.log(result.reverse());
    }
}

module.exports = {
    'heapPerm' : heapPerm,
    'heapPermIterative' : heapPermIterative,
    'comb' : comb
}