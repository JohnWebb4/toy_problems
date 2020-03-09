import unittest

from src.ransomNote.ransomNote import check_magazine


class TestRansomNote(unittest.TestCase):
    def test_missing_word(self):
        self.assertEqual(check_magazine(["Give", "me", "the"], ["Give", "me", "the", "money"]), "No")

    def test_give_money_with_everything(self):
        self.assertEqual(check_magazine(["Give", "me", "the", "money"], ["Give", "me", "the", "money"]), "Yes")
