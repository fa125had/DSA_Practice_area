import LinkedList from './linkedList.js';

// Linked List
const digits = new LinkedList;

digits.printList();

digits.addToHead(1);
digits.printList();

digits.addToHead(0);
digits.addToTail('9');
digits.printList();

