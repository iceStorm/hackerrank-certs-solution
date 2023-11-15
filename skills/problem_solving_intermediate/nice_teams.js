function maxPairs(skillLevel, minDiff) {
  skillLevel.sort((a, b) => a - b);
  const n = skillLevel.length;
  let i = 0;
  const x = [];

  for (let j = 0; j < n / 2; j++) {
    while (i < n && skillLevel[i] - skillLevel[j] < minDiff) {
      i++;
    }

    if (i >= n) {
      break;
    }

    x.push(i);
  }

  x.splice(n / 2);
  let ans = 0;
  let k = n - 1;

  for (const y of x.reverse()) {
    if (y <= k) {
      ans += 1;
      k -= 1;
    }
  }

  return ans;
}
