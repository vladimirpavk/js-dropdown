const { performance } = require('perf_hooks');

let nizOrigin  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let niz = [...nizOrigin];

let combine_1 = function(anyArray, pointer){   
    //console.log('combine_1')    ;
    if( (anyArray.length - 1) - pointer != 2){       
        //print out current configuration
        console.log([...anyArray]);

        //exchange places niz[pointer-1] i niz[pointer]        
        let temp = anyArray[pointer-1];
        anyArray[pointer-1] = anyArray[pointer];
        anyArray[pointer] = temp;

        return combine_1([...anyArray], --pointer)
    }
   
    if(JSON.stringify(anyArray)===JSON.stringify(niz)) return "The End";

    pointer = anyArray.length-1;
    return combine_1([...anyArray], pointer);    
}

let combine = function(anyArray, startPointer, endPointer){   
    //console.log('combine_1')    ;
    if( ((anyArray.length - 1) - endPointer != 2) && startPointer!=endPointer){       
        //print out current configuration
        console.log([...anyArray]);

        //exchange places niz[pointer-1] i niz[pointer]        
        let temp = anyArray[endPointer-1];
        anyArray[endPointer-1] = anyArray[endPointer];
        anyArray[endPointer] = temp;

        //if(startPointer==endPointer) return;

        return combine([...anyArray], startPointer, --endPointer)
    }
   
    if(JSON.stringify(anyArray)===JSON.stringify(niz)) return "The End";

    if(startPointer==endPointer){
        startPointer=0;    
        let temp = anyArray[endPointer-1];
        anyArray[endPointer-1] = anyArray[endPointer];
        anyArray[endPointer] = temp;
    }
    else{
        startPointer = endPointer;        
    }
    endPointer = anyArray.length-1;
    return combine([...anyArray], startPointer, endPointer);    
}

/* combine([...niz], 0, [...niz].length - 1); */
const isEven = (element)=>{
    if((element/2 - Math.ceil(element/2))!=0) return false;
    else return true;
}

const newArray = [];

const perm = (pointer, anyArray)=>{
    if(pointer==1){
        //console.log(anyArray)
        newArray.push(anyArray);
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
const startTime = performance.now();
perm(niz.length, niz);
const endTime = performance.now();
console.log(endTime - startTime);

Date.now();