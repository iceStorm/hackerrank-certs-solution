function numberOfWays(roads) {
  const n = roads.length + 1;
  const adj = new Array(n).fill(null).map(() => []);

  for (const [i, j] of roads) {
    adj[i - 1].push(j - 1);
    adj[j - 1].push(i - 1);
  }

  let ans = 0;

  function dfs(x, d, dist) {
    dist[x] = d;
    for (const y of adj[x]) {
      if (dist[y] === -1) {
        dfs(y, d + 1, dist);
      }
    }
  }

  // Brute force.
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const dist1 = new Array(n).fill(-1);
        dfs(i, 0, dist1);

        if (dist1[j] !== dist1[k]) {
          continue;
        }

        const dist2 = new Array(n).fill(-1);
        dfs(j, 0, dist2);

        if (dist2[i] === dist2[k]) {
          ans += 1;
        }
      }
    }
  }

  return ans;
}
