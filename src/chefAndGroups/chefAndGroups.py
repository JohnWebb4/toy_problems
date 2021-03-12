def count_groups(line):
    group_count = 0
    is_in_group = False

    for c in line:
        if c == "1" and not is_in_group:
            group_count += 1
            is_in_group = True
        if c == "0" and is_in_group:
            is_in_group = False

    return group_count