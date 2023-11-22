func customSorting(strArr []string) []string {
    // A simple bubble sort with custom comparison logic
    n := len(strArr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if less(strArr[j+1], strArr[j]) {
                strArr[j], strArr[j+1] = strArr[j+1], strArr[j]
            }
        }
    }
    return strArr
}

// less returns true if str1 should be sorted before str2
func less(str1, str2 string) bool {
    len1, len2 := len(str1), len(str2)
    odd1, odd2 := len1%2 != 0, len2%2 != 0

    // Odd lengths come before even lengths
    if odd1 != odd2 {
        return odd1
    }

    // If both have the same oddness
    if odd1 {
        // If both are odd, shorter comes first
        if len1 != len2 {
            return len1 < len2
        }
    } else {
        // If both are even, longer comes first
        if len1 != len2 {
            return len1 > len2
        }
    }

    // If same length, sort lexicographically
    return str1 < str2
}
