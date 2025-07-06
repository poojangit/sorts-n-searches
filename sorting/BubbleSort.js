function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps happened, array is already sorted
    if (!swapped) break;
  }

  return arr;
}
const arr = [5, 1, 4, 2, 8];
const sorted = bubbleSort(arr);
console.log("Sorted Array:", sorted);
