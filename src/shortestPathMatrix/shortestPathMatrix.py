from queue import PriorityQueue

def shortestPathBinaryMatrix(grid) -> int:
    size = -1
    queue = PriorityQueue()
    len_grid_height = len(grid)
    len_grid_width = len(grid[0])

    if grid[0][0] == 1:
        return -1

    has_seen = {'0,0': True}
    queue.put([len_grid_height + len_grid_width, 1, [0, 0]])

    while not queue.empty():
        next = queue.get()
        current_length = next[1]
        current_pos = next[2]

        if current_pos[0] >= len(grid) - 1 and current_pos[1] >= len(grid[current_pos[0]]) - 1:
            size = current_length
            break

        to_add = []

        if current_pos[0] + 1 < len(grid):
            new_pos = [current_pos[0] + 1, current_pos[1]]
            to_add.append(new_pos)

        if current_pos[1] + 1 < len(grid[current_pos[0]]):
            new_pos = [current_pos[0], current_pos[1] + 1]
            to_add.append(new_pos)

        if current_pos[0] + 1 < len(grid) and current_pos[1] + 1 < len(grid[current_pos[0]]):
            new_pos = [current_pos[0] + 1, current_pos[1] + 1]
            to_add.append(new_pos)

        if current_pos[0] - 1 >= 0 and current_pos[1] + 1 < len(grid[current_pos[0]]):
            new_pos = [current_pos[0] - 1, current_pos[1] + 1]
            to_add.append(new_pos)

        if current_pos[0] + 1 < len(grid) and current_pos[1] - 1 >= 0:
            new_pos = [current_pos[0] + 1, current_pos[1] - 1]
            to_add.append(new_pos)

        if current_pos[0] - 1 >= 0:
            new_pos = [current_pos[0] - 1, current_pos[1]]
            to_add.append(new_pos)

        if current_pos[1] - 1 >= 0:
            new_pos = [current_pos[0], current_pos[1] - 1]
            to_add.append(new_pos)

        if current_pos[0] - 1 >= 0 and current_pos[1] - 1 >= 0:
            new_pos = [current_pos[0] - 1, current_pos[1] - 1]
            to_add.append(new_pos)


        for new_pos in to_add:
            key = ','.join(str(e) for e in new_pos)
            if grid[new_pos[0]][new_pos[1]] == 0 and not has_seen.get(key):
                new_length = current_length + 1
                new_cost = len_grid_height - new_pos[0] + len_grid_width - new_pos[1] + new_length

                with queue.mutex:
                    # API not guaranteed
                    is_in_queue = False
                    for e in queue.queue:
                        # If I can get to this position faster
                        if e[2] == new_pos:
                            if new_length < e[1]:
                                e[0] = new_cost
                                e[1] = new_length
                                is_in_queue = True
                                break

                if not is_in_queue:
                    queue.put([new_cost, new_length, new_pos])
                    has_seen[key] = True


    return size