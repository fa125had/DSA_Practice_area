import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;

    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let newTail = this.head;
    if (!newTail) {
      this.head = new Node(data);
    } else {
      while (newTail.getNextNode()) {
        newTail = newTail.getNextNode();
      }
      newTail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    let removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    output = output.concat("<tail>");
    console.log(output);
  }
}

export default LinkedList;
