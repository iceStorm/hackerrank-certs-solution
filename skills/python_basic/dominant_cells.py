#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'numCells' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY grid as parameter.
#
def numCells(grid):
    # Write your code here
    result = 0

    for i in range(len(grid)):
        for k in range(len(grid[0])):
            value = grid[i][k]
            flag = 1

            for ii in range(max(0, i - 1), min(len(grid), i + 2)):
                for kk in range(max(0, k - 1), min(len(grid[0]), k + 2)):
                    if (ii, kk) != (i, k) and value <= grid[ii][kk]:
                        flag = 0
                        break

                if flag == 0:
                    break
            else:
                result += 1

    return result


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    grid_rows = int(input().strip())
    grid_columns = int(input().strip())

    grid = []

    for _ in range(grid_rows):
        grid.append(list(map(int, input().rstrip().split())))

    result = numCells(grid)

    fptr.write(str(result) + '\n')

    fptr.close()
