/*
    Kadane's algorithm
    Used for “Maximum subarray sum” in given array of integers.
*/

const input = [4, -2, 6, 7, -10, -10, 9, -3, 4, 7, -28, 2, 9, 3, 2, 11];

function maxSubArr(arr) {
  let currentBest = {
    sum: arr[0],
    arr: [arr[0]],
  };
  let overAllBest = { ...currentBest };

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (currentBest.sum >= 0) {
      currentBest.sum += element;
      currentBest.arr.push(element);
    } else {
      currentBest.sum = element;
      currentBest.arr = [element];
    }
    if (overAllBest.sum < currentBest.sum) {
      overAllBest.sum = currentBest.sum;
      overAllBest.arr = [...currentBest.arr];
    }
  }
  return overAllBest;
}

console.log(maxSubArr(input));
