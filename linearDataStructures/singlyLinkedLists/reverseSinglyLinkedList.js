// Given the head of a linked list, write a function named reverseLinkedList(linkedList) that reverses that linked list.

const reverseLinkedList = (linkedList) => {
  let node = linkedList;
  let prev = null;
  let next = null;

  while(node) {
    // save next pointer
    next = node.next;
    // reverse the pointer
    node.next = prev;
    // move prev pointer
    prev = node;
    // move current pointer
    node = next;
  }
  // return the new head
  return prev;
}