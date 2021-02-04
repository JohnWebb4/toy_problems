import unittest

from src.removeDuplicates.removeDuplicates import remove_duplicates 


class TestRemoveDuplicates(unittest.TestCase):
    def test_remove_duplicates_5(self):
        nums = [0,0,1,1,1,2,2,3,3,4]
        self.assertEqual(5, remove_duplicates(nums))
        self.assertEqual([0,1,2,3,4], nums)

    def test_remove_duplicates_2(self):
        nums = [1,1,2]
        self.assertEqual(2, remove_duplicates(nums))
        self.assertEqual([1,2], nums)
