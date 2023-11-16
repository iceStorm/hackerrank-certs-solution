func countBits(num uint32) int32 {
	// Convert the number to its binary representation
	binaryString := strconv.FormatUint(uint64(num), 2)

	// Count the number of set bits (ones) in the binary string
	numberOfSetBits := int32(0)
	for _, bit := range binaryString {
		if bit == '1' {
			numberOfSetBits++
		}
	}

	return numberOfSetBits
}
