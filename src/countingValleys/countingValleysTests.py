import unittest

from src.countingValleys.countingValleys import counting_valleys;


class TestCountingValleys(unittest.TestCase):
    def test_large_valley(self):
        self.assertEqual(counting_valleys("UDDDUDUU"), 1)

