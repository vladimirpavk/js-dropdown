const { node } = require("webpack");

//linkedlist class
class Node{
    constructor(value, nextPointer){
        this.value = value;
        this.nextPointer = null;
    }
}

class LinkedList{

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
}

module.exports = {
    "Node": Node,
    "LinkedList": LinkedList
}