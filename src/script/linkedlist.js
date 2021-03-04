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
    }

    addNodeEnd(value){
        let newNode = new Node(value);
        
        if(this.startPointer === null){
            this.startPointer = newNode;           
        }
        else{
            let pointer = this.startPointer;

            while(pointer.nextPointer!==null) pointer=pointer.nextPointer;
            pointer.nextPointer = newNode;     
        }    
    }

    addArray(arrayList){
        this.addNodeEnd(...arrayList);
    }

    printList(node){
        while(pointer.nextPointer!==null) console.log(node.value);
    }
}

module.exports = {
    "Node": Node,
    "LinkedList": LinkedList
}