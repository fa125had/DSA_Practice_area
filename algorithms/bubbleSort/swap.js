export const swap = (arr, idx1, idx2) => {
  const temp = arr[idx2];
  arr[idx2] = arr[idx1];
  arr[idx1] = temp;
};
