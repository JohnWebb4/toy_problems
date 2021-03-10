import unittest

from src.reverseInteger.reverseInteger import  reverse_integer

class TestReverseInteger(unittest.TestCase):
    def test_reverse_integer_321(self):
        self.assertEqual(321, reverse_integer(123))

    def test_reverse_integer_neg_321(self):
        self.assertEqual(-321, reverse_integer(-123))

    def test_reverse_integer_21(self):
        self.assertEqual(21, reverse_integer(120))

    def test_reverse_integer_0(self):
        self.assertEqual(0, reverse_integer(0))
    
    def test_reverse_integer_1534236469(self):
        self.assertEqual(0, reverse_integer(1534236469))
