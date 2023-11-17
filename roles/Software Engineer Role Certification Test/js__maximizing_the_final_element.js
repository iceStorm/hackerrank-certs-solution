function getMaxValue(arr) {
  console.log("original arr:", arr);

  arr.sort((a, b) => a - b);
  console.log("sorted arr:", arr);

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] - arr[i - 1] > 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  console.log("subtracted arr:", arr);

  return arr.pop();
}
