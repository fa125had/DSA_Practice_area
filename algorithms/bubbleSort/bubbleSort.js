/*
Bubble sort’s worst-case runtime is O(n^2). 
Its best-case runtime is O(n) for an already-sorted list.
*/

import { swap } from "./swap.js";

const bubbleSort = (input) => {
  let swapCount = 0;
  let swapping = true;

  while (swapping) {
    swapping = false;

    for (let i = 0; i < input.length - 1; i++) {
      // Compare
      if (input[i] > input[i + 1]) {
        console.log(`Swapping pair ${input[i]}, ${input[i + 1]} in [${input}]`);

        // Swap
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }

  console.log(`Swapped ${swapCount} times`);
  return input;
};

const givenArray = [5, 1, 6, 8, 3, 9, 2, 0, 4, 7];

const sortedArray = bubbleSort([...givenArray]);

console.log(`\nGiven input:${givenArray}\nSorted version:${sortedArray}`);
