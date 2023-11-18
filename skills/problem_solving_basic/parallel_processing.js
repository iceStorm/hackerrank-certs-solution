function minTime(files, numCores, limit) {
  let x = [];
  let y = [];

  for (let f of files) {
    if (f % numCores === 0) {
      x.push(f);
    } else {
      y.push(f);
    }
  }

  x.sort((a, b) => b - a);

  return (
    Math.floor(
      x.slice(0, limit).reduce((acc, val) => acc + val, 0) / numCores
    ) +
    x.slice(limit).reduce((acc, val) => acc + val, 0) +
    y.reduce((acc, val) => acc + val, 0)
  );
}
