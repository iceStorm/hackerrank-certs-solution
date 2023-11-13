public static String decryptMessage(String encryptedMessage) {
    String[] words = encryptedMessage.split(" ", 0);
    String[] reversedWords = new String[words.length];
    
    // reverse words
    for (int i = words.length - 1; i >= 0 ; --i) {
        reversedWords[words.length - i - 1] = words[i];
    }
    
    // spread each word's letter frequency
    StringBuilder sb = new StringBuilder();
    
    for (String word : reversedWords) {
        for (int i = 0; i < word.length(); ++i) {
            char letter = word.charAt(i);
            boolean isDigit = Character.isDigit(letter);

            if (isDigit) {
                for (int x = 0; x < Character.getNumericValue(letter); ++x) {
                    sb.append(word.charAt(i - 1));
                }
                
                continue;
            }
            
            sb.append(word.charAt(i));
        }

        sb.append(" ");
    }

    return sb.toString();
}
