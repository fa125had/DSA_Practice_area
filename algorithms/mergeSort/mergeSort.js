/*
1- Splitting the input array: 
The algorithm recursively splits the input array until each element is in its own array.

2- Merging sorted arrays:
The algorithm compares and combines the elements of arrays until the input array is sorted. 

the same steps are taken regardless of the input (order and length)
results in an average, best, and worst case complexity all equal to the same value, O(n log n).
*/

const mergeSort = (inputArray) => {
  const length = inputArray.length;

  // Base Case
  if (length === 1) return inputArray;

  const midIdx = Math.floor(length / 2);
  const leftArray = inputArray.slice(0, midIdx);
  const rightArray = inputArray.slice(midIdx, length);

  // Recursive Case
  mergeSort(leftArray);
  mergeSort(rightArray);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// Merging
const merge = (leftArray, rightArray) => {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }

  return sortedArray.concat(leftArray, rightArray);
};

// Test
const inputArr = [30, 5, 22, 1, 4, -7];

console.log(mergeSort(inputArr));
