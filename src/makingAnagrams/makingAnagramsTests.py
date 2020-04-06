import unittest

from src.makingAnagrams.makingAnagrams import get_deletions_to_make_anagram

class TestMakingAnagrams(unittest.TestCase):
    def test_make_anagram_cde(self):
        self.assertEqual(get_deletions_to_make_anagram("cde", "abc"), 4)
