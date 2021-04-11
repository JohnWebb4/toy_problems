import unittest

from src.roadsAndLibraries.roadsAndLibraries import roads_and_libraries

class TestRoadsAndLibraries(unittest.TestCase):
    def test_4(self):
        self.assertEqual(roads_and_libraries(3, 2, 1,  [[1, 2], [3, 1], [2, 3]]), 4)

    def test_12(self):
        self.assertEqual(roads_and_libraries(6, 2, 5, [[1, 3], [3, 4], [2, 4], [1, 2], [2, 3], [5, 6]]), 12)
    
    def test_15(self):
        self.assertEqual(roads_and_libraries(5, 6, 1, [[1, 2], [1, 3], [1, 4]]), 15)

    def test_merging(self):
        self.assertEqual(roads_and_libraries(5, 6, 1, [[1, 2], [3, 4], [4, 5], [1, 4]]), 10)
