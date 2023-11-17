def findSubstring(s, k):
    vowels = ["a", "e", "i", "o", "u"]
    cur = best = sum([c in vowels for c in s[:k]])
    ans = 0
    for i in range(k, len(s)):
        cur += s[i] in vowels
        cur -= s[i - k] in vowels
        if cur > best:
            best = cur
            ans = i - k + 1
    if best > 0:
        return s[ans:(ans+k)]
    else:
        return "Not found!"
