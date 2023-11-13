class Node {
  constructor(parent, l, r, op = Math.max) {
    this.parent = parent;
    this.l = l;
    this.r = r;
    this.lc = null;
    this.rc = null;
    this.val = r - l;
    this.op = op;
  }

  split(x) {
    // No balancing, but doesn't seem to give timeouts.
    if (!(this.l <= x && x <= this.r)) {
      throw new Error("Invalid split position");
    }

    if (x === this.l || x === this.r) {
      // Split lies on borders.
      return;
    }

    if (this.lc) {
      if (x === this.lc.r) {
        // Split lies on mid split.
        return;
      }

      if (x < this.lc.r) {
        this.lc.split(x);
      } else {
        this.rc.split(x);
      }

      this.val = this.op(this.lc.val, this.rc.val);
    } else {
      this.lc = new Node(this, this.l, x);
      this.rc = new Node(this, x, this.r);
      this.val = this.op(x - this.l, this.r - x);
    }
  }
}

function getMaxArea(w, h, isVertical, distance) {
  const wRoot = new Node(null, 0, w);
  const hRoot = new Node(null, 0, h);
  const ans = [];

  for (let i = 0; i < isVertical.length; i++) {
    const iv = isVertical[i];
    const d = distance[i];

    if (iv) {
      wRoot.split(d);
    } else {
      hRoot.split(d);
    }

    ans.push(wRoot.val * hRoot.val);
  }

  return ans;
}
