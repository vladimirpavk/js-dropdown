const {
    Node,
    LinkedList
} = require('./linkedlist');

let ll = new LinkedList();
ll.addArray([5,2,3,4,5,6]);
ll.printList();

console.log('recursion');
ll.printListReverse();

console.log(ll.addNodeAtIndex(5, 2));
ll.printList();

ll.deleteNode(3);
console.log('Deleted node 3');
ll.printList();

ll.prikažiPavletovuListuŽelja();