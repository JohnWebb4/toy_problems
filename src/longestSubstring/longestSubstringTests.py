import unittest

from src.longestSubstring.longestSubstring import get_length_longest_substring


class TestLongestSubstring(unittest.TestCase):
    def test_abc(self):
        self.assertEqual(get_length_longest_substring('abcabcbb'), 3)
    def test_bbb(self):
        self.assertEqual(get_length_longest_substring('bbbbb'), 1)
    def test_pww(self):
        self.assertEqual(get_length_longest_substring('pwwkew'), 3)
    def test_empty(self):
        self.assertEqual(get_length_longest_substring(""), 0)
