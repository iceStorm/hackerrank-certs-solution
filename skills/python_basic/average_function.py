
def avg(*numbers):
    sum = 0

    for num in numbers:
        sum += num

    return float(sum) / len(numbers)
