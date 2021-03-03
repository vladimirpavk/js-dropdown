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

    addNodeEnd(node){
        pointer = this.startPointer;
        while(pointer.nextPointer!==null) pointer=pointer.nextPointer;
        pointer.next = node;
    }

    printList(node){
        while(pointer.nextPointer!==null) console.log(node.value);
    }
}