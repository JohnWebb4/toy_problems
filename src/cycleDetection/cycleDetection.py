class Node:
    def __init__(self, data, next):
        self.data = data
        self.next = next


def has_cycle(head):
    slow_head = head
    fast_head = head.next
    is_even = False

    while fast_head and fast_head.next:
        if slow_head == fast_head:
            return 1
        if is_even:
            slow_head = slow_head.next
        fast_head = fast_head.next
        is_even = not is_even
    return 0
