const input = [10, 22, 9, 33, 21, 50, 41, 60, 80, 1];

function lis(arr) {
  let dp = [];
  let omax = 0;
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        if (dp[j] > max) max = dp[j];
      }
    }
    dp[i] = max + 1;
    if (omax < dp[i]) omax = dp[i];
  }
  return omax;
}

const output = lis(input);
console.log(output);
