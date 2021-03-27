from copy import deepcopy

# Input container: array of array of ints. Number of each ball type in each container
# Output: 'Possible' or 'Impossible' to swap balls and sort
# Side Effects: None

# Create map storing count of each type of ball
# Create map storing number of balls in each container
# For each type
# # Find container with same number of balls
# # # If exists remove from list
# # # If not return 'Impossible'
# Compare num remainding containers
# # If none return 'Possible'
# # Else return 'Impossible'


def organize_containers(container: [[int]]):
    num_containers = len(container)

    if num_containers == 0:
        return 'Possible'

    num_types = len(container[0])

    if num_types == 0:
        return 'Possible'

    if num_containers != num_types:
        return 'Impossible'

    type_count_map = container[0]
    box_count_map = [sum(box) for box in container]
    for i in range(1, num_containers):
        for j in range(len(container[i])):  # Possible jagged array
            type_count_map[j] += container[i][j]

    sorted_type_counts = sorted(type_count_map)
    sorted_box_counts = sorted(box_count_map)

    return 'Possible' if sorted_type_counts == sorted_box_counts else 'Impossible'
