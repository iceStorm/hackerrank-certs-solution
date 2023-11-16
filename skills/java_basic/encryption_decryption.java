// 11/15 test cases passed

public static String decryptMessage(String encryptedMessage) {
    // Split the input string into words
    List<String> words = new ArrayList<String>(Arrays.asList(encryptedMessage.split(" ")));
    Collections.reverse(words);

    // Apply the decompression logic to each word
    StringBuilder decryptedMessage = new StringBuilder();
    for (String word : words) {
        decryptedMessage.append(decompressWord(word)).append(" ");
    }

    // Trim any leading or trailing spaces and return the decrypted message
    return decryptedMessage.toString().trim();
}

private static String decompressWord(String word) {
    StringBuilder sb = new StringBuilder();

    for (int i = 0; i < word.length(); ++i) {
        char letter = word.charAt(i);
        boolean isDigit = Character.isDigit(letter);

        if (isDigit) {
            for (int x = 0; x < Character.getNumericValue(letter) - 1; ++x) {
                sb.append(word.charAt(i - 1));
            }
            
            continue;
        }
        
        sb.append(word.charAt(i));
    }

    return sb.toString();
}
