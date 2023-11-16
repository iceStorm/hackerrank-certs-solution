
from collections import defaultdict


def minOperations(arr, threshold, d):
    # dp[i] := [count of i values, number of steps]
    dp = defaultdict(lambda: [0, 0])
    arr.sort()
    ans = sys.maxsize
    for x in arr:
        steps = 0
        while True:
            dp[x][0] += 1
            dp[x][1] += steps
            if dp[x][0] >= threshold:
                ans = min(ans, dp[x][1])
            if x == 0:
                break
            x //= d
            steps += 1
    return ans
