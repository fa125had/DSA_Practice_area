import LinkedList from "./linkedList.js";

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  hasRoom() {
    if (this.size < this.maxSize) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      throw new Error("Queue is full!");
    }
  }

  dequeue() {
    if (!this.isEmpty) {
      const removedHead = this.queue.removeHead;
      this.size--;
      console.log(`Removed ${removedHead}! Queue size is now ${this.size}`);
      return removedHead;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

export default Queue;
