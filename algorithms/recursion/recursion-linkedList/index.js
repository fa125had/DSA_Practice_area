import { LinkedList } from "./LinkedList.js";

const myList = new LinkedList();

myList.addToHead("Node 1");
myList.addToHead("Node 2");
myList.addToHead("Node 3");
myList.addToHead("Node 4");

// Add checkpoint 2:
const myNodeRecursive = myList.findNodeIteratively("Node 2");
console.log(myNodeRecursive);
