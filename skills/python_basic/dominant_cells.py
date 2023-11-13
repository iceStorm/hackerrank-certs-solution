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
    dominant_cells = 0
    x = 0

    for row in range(0, len(grid)):
        y = 0

        for cell in range(0, len(grid[row])):
            neighborValues = get_cell_neighbors(grid, x, y)
            print("x:", x, "y:", y, " neighbors:", neighborValues)
            
            if all(cell > neighbor for neighbor in neighborValues):
                dominant_cell += 1
            
            y += 1
        
        x += 1
    
    return dominant_cells

def get_cell_neighbors(grid, x, y):
    left_cell = 0
    right_cell = 0
    top_cell = 0
    bottom_cell = 0
    top_left_cell = 0
    bottom_left_cell = 0
    top_right_cell = 0
    bottom_right_cell = 0

    try:
        left_cell = grid[x][y - 1]
    except:
        pass
    try:
        right_cell = grid[x][y + 1]
    except:
        pass

    try:
        top_cell = grid[x - 1][y]
    except:
        pass
    try:
        bottom_cell = grid[x + 1][y]
    except:
        pass
    
    try:
        top_left_cell = grid[x - 1][y - 1]
    except:
        pass
    try:
        bottom_left_cell = grid[x + 1][y - 1]
    except:
        pass
    
    try:
        top_right_cell = grid[x - 1][y + 1]
    except:
        pass
    try:
        bottom_right_cell = grid[x + 1][y + 1]
    except:
        pass
    
    return [
        left_cell,
        right_cell,
        top_cell,
        bottom_cell,
        top_left_cell,
        bottom_left_cell,
        top_right_cell,
        bottom_right_cell
    ]
    
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
