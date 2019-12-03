def counting_valleys(path):
    altitude = 0
    count_valleys = 0
    is_in_valley = False

    for step in path:
        # Update altitude
        if step == "U":
            altitude += 1
        else:
            altitude -= 1

        if altitude < 0 and not is_in_valley:
            # Check if going into valley
            count_valleys += 1
            is_in_valley = True
        elif altitude >= 0:
            # If above ground level then not in valley
            is_in_valley = False

    return count_valleys

