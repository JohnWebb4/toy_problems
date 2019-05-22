import unittest

from src.main.python.matrixRotation.matrixRotation import rotate

class TestMatrixRotation(unittest.TestCase):
    def setUp(self):
        self.matrix = []

    def test_4_by_4(self):
        self.assertEqual(rotate(self.matrix, 0), 0)
