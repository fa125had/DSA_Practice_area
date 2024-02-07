import { swap } from "./swap.js";

export const quicksort = (
  array,
  leftBound = 0,
  rightBound = array.length - 1
) => {
  // Base condition
  if (leftBound < rightBound) {
    // Logging
    // console.log(
    //   ". Calling partition",
    //   array,
    //   `with leftBound ${leftBound} and rightBound ${rightBound}`
    // );

    // Partitioning
    const pivotIndex = partition(array, leftBound, rightBound);
    console.log(`. Returning pivotIndex = ${pivotIndex}`);

    // Recursively sorting the left part of the array.

    // console.log(
    //   `\nCalling quicksort for left partition with leftBound ${leftBound} and (pivotIndex-1) ${
    //     pivotIndex - 1
    //   }`
    // );
    quicksort(array, leftBound, pivotIndex - 1);

    // Recursively sorting the right part of the array.

    // console.log(
    //   `\nCalling quicksort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`
    // );
    quicksort(array, pivotIndex, rightBound);
  }
  // Returning the sorted array.
  return array;
};

// Elements less than the pivot come before it and all elements greater come after it.
export const partition = (array, leftIndex, rightIndex) => {
  // Selecting the pivot element as the middle element of the array segment.
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];

  console.log(
    `.. Partitioning with pivot ${pivot} leftIndex ${leftIndex} rightIndex ${rightIndex}`
  );

  // Looping until the two pointers meet.
  while (leftIndex <= rightIndex) {
    // Moving the leftIndex pointer to the right until an element greater than the pivot is found.
    while (array[leftIndex] < pivot) {
      leftIndex++;

      // console.log(
      //   `.. ${
      //     array[leftIndex - 1]
      //   } < ${pivot} : Incremented leftIndex => ${leftIndex}`
      // );
    }
    // Moving the rightIndex pointer to the left until an element less than the pivot is found.
    while (array[rightIndex] > pivot) {
      rightIndex--;

      // console.log(
      //   `.. ${
      //     array[rightIndex + 1]
      //   } > ${pivot} : Decremented rightIndex => ${rightIndex}`
      // );
    }

    if (leftIndex <= rightIndex) {
      // Swapping the elements at leftIndex and rightIndex.
      swap(array, leftIndex, rightIndex);

      // console.log(
      //   `.. Swapped leftIndex ${leftIndex} with rightIndex ${rightIndex}`,
      //   array
      // );

      leftIndex++;
      rightIndex--;

      // console.log(
      //   `......... : Incremented leftIndex => ${leftIndex} Decremented rightIndex => ${rightIndex}`
      // );
    }
  }
  // Returning the index of the left pointer for partitioning.
  return leftIndex;
};
