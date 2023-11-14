function renameFile(newName, oldName) {
  const n = newName.length;
  const m = oldName.length;
  let dp = new Array(m + 1).fill(1);

  for (let i = 1; i <= n; i++) {
    const dpp = new Array(m + 1).fill(0);

    for (let j = i; j <= m; j++) {
      dpp[j] = dpp[j - 1];

      if (newName[i - 1] === oldName[j - 1]) {
        dpp[j] += dp[j - 1];
      }
    }

    dp = dpp;
  }

  return dp[m] % (Math.pow(10, 9) + 7);
}
