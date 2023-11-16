def efficientJanitor(weights, n):
    trips = 0
    currentWeight = 0

    for i in range(n):
        if currentWeight + weights[i] <= 3.00:
            currentWeight += weights[i]
        else:
            trips += 1
            currentWeight = weights[i]

    # Handle the last bag if it doesn't fit into the current trip
    if currentWeight > 0:
        trips += 1

    return trips
