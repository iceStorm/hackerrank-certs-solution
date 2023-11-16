function efficientJanitor(weights) {
  weights.sort((a, b) => a - b);

  let left = 0;
  let right = weights.length - 1;
  let count = 0;

  while (left <= right) {
    if (left === right) {
      count++;
      break;
    }

    if (weights[left] + weights[right] <= 3.0) {
      left++;
      right--;
      count++;
    } else {
      right--;
      count++;
    }
  }

  return count;
}
