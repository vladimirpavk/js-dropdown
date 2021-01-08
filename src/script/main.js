let nizOrigin  = ['a', 'b', 'c', 'd'];
let niz = [...nizOrigin];

//console.log(JSON.stringify(niz)===JSON.stringify(nizOrigin));

let pointer = niz.length;

let combine2 = (anyArray, pointer, isStart, canPrint)=>{   
    //print out current configuration
    if(canPrint) console.log([...anyArray]);

    /* const isValid = JSON.stringify(anyArray)===JSON.stringify(niz);
    if(!isStart && isValid) return; */

    if(pointer != 0){       

        //exchange places niz[pointer-1] i niz[pointer]        
        let temp = anyArray[pointer-1];
        anyArray[pointer-1] = anyArray[pointer];
        anyArray[pointer] = temp;
        //console.log('array', [...anyArray]);

        combine([...anyArray], --pointer, false, true)

    }
    else{
        if(!isStart && (JSON.stringify(anyArray)===JSON.stringify(niz))) return "valid"        ;

        pointer = anyArray.length-1;
        combine([...anyArray], pointer, false, false);
    }
}

let combine3 = function(anyArray, pointer){       
    if(pointer != 0){       
        //print out current configuration
        console.log([...anyArray]);

        //exchange places niz[pointer-1] i niz[pointer]        
        let temp = anyArray[pointer-1];
        anyArray[pointer-1] = anyArray[pointer];
        anyArray[pointer] = temp;

        return combine([...anyArray], --pointer)
    }
    else{

        if(JSON.stringify(anyArray)===JSON.stringify(niz)){
            return 1;
        }

        pointer = anyArray.length-1;
        combine([...anyArray], pointer);
    }
}

let combine = function(anyArray, pointer){       
    if(pointer != 0){       
        //print out current configuration
        console.log([...anyArray]);

        //exchange places niz[pointer-1] i niz[pointer]        
        let temp = anyArray[pointer-1];
        anyArray[pointer-1] = anyArray[pointer];
        anyArray[pointer] = temp;

        return combine([...anyArray], --pointer)
    }
   
    if(JSON.stringify(anyArray)===JSON.stringify(niz)) return "The End";

    pointer = anyArray.length-1;
    return combine([...anyArray], pointer);    
}

console.log(
    combine([...niz], [...niz].length-1)
);

/* if(pointer != 0){
    //exchange places niz[pointer-1] i niz[pointer]
    temp = niz[pointer-1];
    niz[pointer-1] = niz[pointer];
    niz[pointer] = temp;

    pointer --;
}
else{
    pointer = niz.length();
} */
   

const rec1 = (inArray, pointer)=>{
    console.log(inArray, pointer);
    if(pointer == niz.length) return;
    rec1([...inArray, niz[pointer]], ++pointer);
}

const rec2 = (inArray, poi1, poi2)=>{  
    console.log(inArray, poi1, poi2);
    if(poi2 == niz.length) return;
    if(!(poi1 == poi2)){     
        rec2([...inArray, niz[poi2]], poi1, ++poi2);
    }
    else{
        //do not put into temporary array
        rec2([...inArray], poi1, ++poi2);
    }
}

//rec1(['a'], 2);
//rec2(['c'], 2, 1);

/* let posBits = 0;

for(let i=0; i<16; i++){
    console.log(posBits.toString(2));
    posBits++;
} */