#!/bin/python

import math
import os
import random
import re
import sys



def avg(*numbers):
    sum = 0
    
    for num in numbers:
        sum += num
    
    return float(sum) / len(numbers)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    
    nums = map(int, raw_input().split())
    res = avg(*nums)
    
    fptr.write('%.2f' % res + '\n')

    fptr.close()
