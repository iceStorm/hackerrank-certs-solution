function maxSubarrayValue(arr) {
  // Gets timeouts.
  let even = [0];
  let odd = [0];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      even.push(even[even.length - 1] + arr[i]);
      odd.push(odd[odd.length - 1]);
    } else {
      even.push(even[even.length - 1]);
      odd.push(odd[odd.length - 1] + arr[i]);
    }
  }

  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let a = even[j] - even[i];
      let b = odd[j] - odd[i];
      ans = Math.max(ans, Math.pow(a - b, 2));
    }
  }

  return ans;
}
