import unittest

from src.main.python.cycleDetection.cycleDetection import has_cycle, Node


class TestCycleDetection(unittest.TestCase):
    def test_no_cycle(self):
        head4 = Node(4, None)
        head3 = Node(3, head4)
        head2 = Node(2, head3)
        head1 = Node(1, head2)
        head = Node(0, head1)

        self.assertEqual(has_cycle(head), 0)

    def test_cycle(self):
        head4 = Node(4, None)
        head3 = Node(3, head4)
        head2 = Node(2, head3)
        head1 = Node(1, head2)
        head = Node(0, head1)
        head4.next = head1

        self.assertEqual(has_cycle(head), 1)
