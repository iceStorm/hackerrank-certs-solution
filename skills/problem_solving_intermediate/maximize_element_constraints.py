# 3/15 test cases passed

def maxElement(n, maxSum, k):
    def isValid(value):
        # Check if it's possible to construct an array with the given value at index k
        total_sum = 0

        for i in range(n):
            if i == k:
                total_sum += value
            else:
                total_sum += 1  # Absolute difference between consecutive elements is at most 1

        return total_sum <= maxSum

    # Binary search for the maximum possible value at index k
    left, right = 1, maxSum

    while left < right:
        mid = (left + right + 1) // 2

        if isValid(mid):
            left = mid
        else:
            right = mid - 1

    return left
