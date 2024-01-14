/*
Hash map: A key-value store that uses an array and a hashing function to save and retrieve values.
Key: The identifier given to a value for later retrieval.
Hash function: A function that takes some input and returns a number.
Compression function: A function that transforms its inputs into some smaller range of possible outputs.

Recipe for saving to a hash table:
- Take the key and plug it into the hash function, getting the hash code.
- Modulo that hash code by the length of the underlying array, getting an array index.
- Check if the array at that index is empty, if so, save the value (and the key) there.
- If the array is full at that index continue to the next possible position depending on your collision strategy.

Recipe for retrieving from a hash table:
- Take the key and plug it into the hash function, getting the hash code.
- Modulo that hash code by the length of the underlying array, getting an array index.
- Check if the array at that index has contents, if so, check the key saved there.
- If the key matches the one you're looking for, return the value.
- If the keys don't match, continue to the next position depending on your collision strategy.
*/

import LinkedList from "./LinkedList.js";

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      // The hashCode += allows the hashing function to avoid generating duplicate hashCodes if keys have the same characters in different orders, such as bat and tab.
      hashCode += hashCode + key.charCodeAt(i);
    }
    // compress by using modular arithmetic and return the hashCode
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    // make it collision-proof (separate chaining strategy)
    const linkedList = this.hashmap[arrayIndex];

    console.log(`Storing ${value} at index ${arrayIndex}`);

    // for empty list
    if (!linkedList.head) {
      linkedList.addToHead({ key, value });
      return;
    }
    // for not empty list
    let current = linkedList.head;
    // iterate the list
    while (!current) {
      // overwrite value with same key
      if (current.data.key === key) {
        current.data = { key, value };
      }
      // add to tail
      if (!current.getNextNode()) {
        current.setNextNode(new Node({ key, value }));
        break;
      }

      current = current.getNextNode();
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    let current = linkedList.head;

    while (current) {
      if (current.data.key === key) {
        console.log(
          `\nRetrieving ${current.data.value} from index ${arrayIndex}`
        );

        return current.data.value;
      }
      current = current.getNextNode();
    }

    return null;
  }
}

export default HashMap;
