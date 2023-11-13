#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'reverse_words_order_and_swap_cases' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING sentence as parameter.
#

def reverse_words_order_and_swap_cases(sentence):
    words = sentence.split(' ')

    reversedWords = list(reversed(words))
    print(reversedWords)

    final_sentence = ''

    for word in reversedWords:
        for letter in word:
            final_sentence += letter.upper() if letter.islower() else letter.lower()

        final_sentence += ' '

    print('final:', final_sentence)

    return final_sentence.strip()


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    sentence = input()

    result = reverse_words_order_and_swap_cases(sentence)

    fptr.write(result + '\n')

    fptr.close()
