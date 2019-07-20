import unittest

from src.main.python.specialMultiple.specialMultiple import special_multiple


class TestSpecialMultiple(unittest.TestCase):
    def test_3(self):
        self.assertEqual(special_multiple(3), "9")

    def test_5(self):
        self.assertEqual(special_multiple(5), "90")

    def test_7(self):
        self.assertEqual(special_multiple(7), "9009")

    def test_1(self):
        self.assertEqual(special_multiple(1), "9")
