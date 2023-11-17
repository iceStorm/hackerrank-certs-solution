/**
 * @param {number[]} arr
 */
function countPairs(arr) {
  const po2 = (x) => x > 0 && !(x & (x - 1));
  const counts = new Map();

  // Count occurrences of elements in the array
  for (const x of arr) {
    counts.set(x, (counts.get(x) || 0) + 1);
  }

  const d = Array.from(counts.entries());
  let ans = 0;

  // Calculate pairs with bitwise AND as power of 2
  for (let i = 0; i < d.length; i++) {
    const [a, aCnt] = d[i];
    for (let j = i; j < d.length; j++) {
      const [b, bCnt] = d[j];
      if (po2(a & b)) {
        if (a === b) {
          ans += (aCnt * (aCnt - 1)) / 2;
        } else {
          ans += aCnt * bCnt;
        }
      }
    }
  }

  return ans;
}
