import unittest

from src.chefAndGroups.chefAndGroups import count_groups

class TestChefAndGroups(unittest.TestCase):
    def test_000(self):
        self.assertEqual(count_groups("000"), 0)
    
    def test_010(self):
        self.assertEqual(count_groups("010"), 1)

    def test_101(self):
        self.assertEqual(count_groups("101"), 2)

    def test_01011011011110(self):
        self.assertEqual(count_groups("01011011011110"), 4)
