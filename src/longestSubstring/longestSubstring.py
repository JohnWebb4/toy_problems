def get_length_longest_substring(s: str):
    if len(s) == 0:
        return 0

    seen_chars = set()
    start = 0
    max_length = 1

    for i in range(len(s)):
        if s[i] in seen_chars:
            while s[start] != s[i]:
                seen_chars.remove(s[start])
                start +=1
            start +=1

        if i + 1 - start > max_length:
            max_length = i + 1 - start

        seen_chars.add(s[i])

    return max_length
