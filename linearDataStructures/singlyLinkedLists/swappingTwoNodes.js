/*
Swapping Two Nodes in a LinkedList
Steps:
1- Iterate through the list looking for the node that matches data1 to be swapped (node1), keeping track of the node’s previous node as you iterate (node1Prev).

2- Repeat step 1 looking for the node that matches data2 (giving you node2 and node2Prev)

3- If node1Prev is null, node1 was the head of the list, so set the list’s head to node2

4- Otherwise, set node1Prev‘s next node to node2

5- If node2Prev is null, set the list’s head to node1

6- Otherwise, set node2Prev‘s next node to node1

7- Set node1‘s next node to node2‘s next node

8- Set node2‘s next node to node1‘s next node
*/

const swapNodes = (list, data1, data2) => {
  let node1 = list.head;
  let node2 = list.head;

  let node1Prev = null;
  let node2Prev = null;

  // step 1
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }

    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  // step 2
  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }

    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  // step 3
  if (node1Prev === null) {
    list.head = node2;
  } else {
    // step 4
    node1Prev.setNextNode(node2);
  }

  // step 5
  if (node2Prev === null) {
    list.head = node1;
  } else {
    // step 6
    node2Prev.setNextNode(node1);
  }

  const temp = node1.getNextNode();
  // step 7
  node1.setNextNode(node2.getNextNode());
  // step 8
  node2.setNextNode(temp);
};
