import unittest

from src.containerOfBalls.containerOfBalls import organize_containers


class TestContainerOfBalls(unittest.TestCase):
    def test_2_2_1(self):
        self.assertEqual(organize_containers([[1, 1], [1, 1]]), 'Possible')

    def test_2_2_0(self):
        self.assertEqual(organize_containers([[0, 2], [1, 1]]), 'Impossible')

    def test_2_2_3(self):
        self.assertEqual(organize_containers([[3, 2], [2, 1]]), 'Possible')
