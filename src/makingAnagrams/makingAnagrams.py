def get_deletions_to_make_anagram(word1, word2):
  char_freq1 = {}
  keys = {}
  diff_count = 0

  for char in word1:
    if char_freq1.get(char, 0) > 0:
      char_freq1[char] = char_freq1[char] + 1
    else:
      char_freq1[char] = 1
    keys[char] = True

  char_freq2 = {}

  for char in word2:
    if char_freq2.get(char, 0) > 0:
      char_freq2[char] = char_freq2[char] + 1
    else:
      char_freq2[char] = 1
    keys[char] = True

  for char in keys:
    count1 = char_freq1.get(char, 0)
    count2 = char_freq2.get(char, 0)
    diff_count += abs(count1 - count2)

  return diff_count