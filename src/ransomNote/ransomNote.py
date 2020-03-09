# Ransom Note

# Input 1: List of strings (possible words)
# Input 2: List of strings (needed words)
# Output: Boolean (do you have all needed words
# Side effects: None

# Brain storm
# Create hash table of needed words
# Create hash table of possible words
# Compare numbers, possible must always be > than needed
#    Or return false

def check_magazine(magazine, note):
    result = True
    magazine_hash = {}
    note_hash = {}

    # Create magazine hash table
    for magazine_word in magazine:
        magazine_hash[magazine_word] = magazine_hash.get(magazine_word, 0) + 1

    # Create note hash table
    for note_word in note:
        note_hash[note_word] = note_hash.get(note_word, 0) + 1

    for note_word in note_hash:
        if magazine_hash.get(note_word, 0) < note_hash[note_word]:
            result = False
            break


    return "Yes" if result else "No"
