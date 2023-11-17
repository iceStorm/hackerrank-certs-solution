class FWT {
    constructor(size) {
        this.size = size;
        this.arr = new Array(size).fill(0);
    }

    add(x, val) {
        if (x === 0) {
            this.arr[0] += val;
            return;
        }
        while (x < this.size) {
            this.arr[x] += val;
            x += x & (-x);
        }
    }

    rank(x) {
        if (x < 0) {
            return 0;
        }
        let res = this.arr[0];
        while (x > 0) {
            res += this.arr[x];
            x &= x - 1;
        }
        return res;
    }
}

function sortedSum(a) {
    const A_LIMIT = 10**6;
    const M = 10**9 + 7;
    const pre = new FWT(A_LIMIT + 1);
    const post = new FWT(A_LIMIT + 1);
    let cur_fn = 0;
    let ans = 0;
    let total = 0;

    for (let i = 0; i < a.length; i++) {
        const pos = pre.rank(a[i]) + 1;
        const greater = total - post.rank(a[i]);
        cur_fn = (cur_fn + pos * a[i] + greater) % M;
        ans = (ans + cur_fn) % M;
        pre.add(a[i], 1);
        post.add(a[i], a[i]);
        total += a[i];
    }

    return ans;
}
