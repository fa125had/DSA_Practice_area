import DoublyLinkedList from "./doublyLinkedList.js";

const subway = new DoublyLinkedList();

subway.addToHead("Station 3");
subway.addToHead("Station 2");
subway.addToHead("Station 1");
subway.printList();

subway.addToTail("Station 7");
subway.addToTail("Station 4");
subway.addToTail("Station 5");
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData("Station 7");
subway.printList();
