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

export const heapPerm = (pointer, anyArray, newArray)=>{
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


/*-------------------------------------------------------------------
    Heap algorithm - iterative - permutations without repetition
    pointer - initially Array.length
    anyArray - array of elements subject of permutations
    return - arrays of array of permutated items
---------------------------------------------------------------------*/

export const heapPermIterative = (pointer, anyArray)=>{
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