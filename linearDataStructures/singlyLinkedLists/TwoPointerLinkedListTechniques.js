// Two Pointers Moving in Parallel

// Task: Create a function that returns the nth last element of a singly linked list.

const nthLastElement = (linkedList, n) => {
  let runner = linkedList.head;
  let current = null;
  let count = 0;

  while (runner) {
    runner = runner.getNextNode();

    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.getNextNode();
    }

    count++;
  }

  return current;
};

// Two Pointers at Different Speeds
// Task: Find the middle node of a linked list.
const findMiddle = (linkedList) => {
  let runner = linkedList.head;
  let current = linkedList.head;

  while (runner) {
    runner = runner.getNextNode();
    if (runner) {
      runner = runner.getNextNode();
      current = current.getNextNode();
    }
  }
  return current;
};
