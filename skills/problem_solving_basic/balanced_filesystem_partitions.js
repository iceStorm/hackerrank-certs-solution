function mostBalancedPartition(parent, filesSize) {
  const n = parent.length;
  const children = new Array(n).fill(null).map(() => []);

  for (let i = 1; i < n; i++) {
    children[parent[i]].push(i);
  }

  const sizeSums = new Array(n).fill(null);

  function sizeSumsRec(i) {
    sizeSums[i] =
      filesSize[i] + children[i].reduce((sum, c) => sum + sizeSumsRec(c), 0);
    return sizeSums[i];
  }

  sizeSumsRec(0);

  return Math.min(
    ...sizeSums.slice(1).map((ss) => Math.abs(sizeSums[0] - 2 * ss))
  );
}
