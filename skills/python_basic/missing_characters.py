
def missingCharacters(s):
    result = []

    # Set to track the presence of each character and digit
    present = set()

    # Mark characters and digits that are present
    for ch in s:
        if ch.isdigit():
            present.add(int(ch))
        elif ch.islower():
            present.add(ord(ch) - ord('a') + 10)

    # Append missing digits in ascending order
    for i in range(10):
        if i not in present:
            result.append(str(i))

    # Append missing characters in ascending order
    for i in range(10, 36):
        if i not in present:
            result.append(chr(i - 10 + ord('a')))

    return ''.join(result)
