import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(value) {
    const nextNode = new Node(value);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(value) {
    let lastNode = this.head;
    if (!lastNode) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      while (temp.getNextNode() !== null) {
        temp = temp.getNextNode();
      }
      temp.setNextNode(new Node(value));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return;

    if (removedHead.next) {
      this.head = removedHead.next;
    }
    return removedHead.data;
  }
}

export default LinkedList;
