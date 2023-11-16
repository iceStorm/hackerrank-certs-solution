function countMax(upRight) {
  let xl = 1;
  let yl = 1;

  xl = parseInt(upRight[1].split(" ")[0]);
  yl = parseInt(upRight[1].split(" ")[1]);

  for (let i = 0; i < upRight.length; i++) {
    if (xl > parseInt(upRight[i].split(" ")[0])) {
      xl = parseInt(upRight[i].split(" ")[0]);
    }
    if (yl > parseInt(upRight[i].split(" ")[1])) {
      yl = parseInt(upRight[i].split(" ")[1]);
    }
  }

  return yl * xl;
}
