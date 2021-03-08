//const { node } = require("webpack");

//linkedlist class
export class Node{
    constructor(value, nextPointer){
        this.value = value;
        this.nextPointer = null;
    }
}

export class LinkedList{

    constructor(){
        this.startPointer = null;
        this.length = 0;
    }

    addNode(value){
        let newNode = new Node(value);
        
        if(this.startPointer === null){
            this.startPointer = newNode;           
        }
        else{
            let pointer = this.startPointer;

            while(pointer.nextPointer!==null) pointer=pointer.nextPointer;
            pointer.nextPointer = newNode;     
        }    

        this.length = this.length + 1;
    }

    addNodeAtIndex(value, index){
        let pointer = this.startPointer;
        let newNode = new Node(value, null);
        for(let i = 1; i<index; i++){
            if(pointer.nextPointer === null) return false;
            pointer = pointer.nextPointer;
        }
        //u poziciji sam za promenu linkova        
        newNode.nextPointer = pointer.nextPointer;
        pointer.nextPointer = newNode;
    }

    addArray(arrayList){
       arrayList.forEach(element => {
           this.addNode(element);
       });
    }

    printList(){
        let pointer = this.startPointer;
        while(pointer!==null){
            console.log(pointer.value);
            pointer = pointer.nextPointer;
        }
    }

    printListReverse(pointer = this.startPointer){
        if(pointer===null) return;
        this.printListReverse(pointer.nextPointer);
        console.log(pointer.value);
    }

    deleteNode(value){
        //delete Node that has value=value
        let pointer = this.startPointer;
        if(pointer.value===value){
            this.startPointer = pointer.nextPointer;
            return;
        }

        while(pointer != null){
            if((pointer.nextPointer).value===value){
                pointer.nextPointer = (pointer.nextPointer).nextPointer;
                return;
            }
            pointer = pointer.nextPointer;
        }
    }

    deletedNodeWithIndex(index){
        if(index === 0){
            this.startPointer = this.startPointer.nextPointer;
            return;
        }

        let pointer = this.startPointer;
        for(let i = 0; i<index-1; i++){
            if(pointer===null) return "Index exceedes array length";
            pointer = pointer.nextPointer;
        }
        pointer.nextPointer = (pointer.nextPointer).nextPointer;
    }

    prikažiPavletovuListuŽelja(){
        let lista = [
            'Da nauči da piše jer trenutno ne zna',
            'Da nauči da se ponaša jer trenutno ne zna',
            'Da nauči da programira kad poraste',
            'Da ne viče na mamu i tatu kad se naljuti'
        ];
        console.log(lista);
    }
}