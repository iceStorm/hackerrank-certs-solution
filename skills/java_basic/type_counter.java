// 3/15 test cases passed

public static void typeCounter(String sentence) {
    // Split the input sentence into words
    String[] words = sentence.split("\\s+");

    // Create a map to store the count of each data type
    Map<String, Integer> typeCount = new HashMap<>();
    typeCount.put("string", 0);
    typeCount.put("integer", 0);
    typeCount.put("double", 0);

    // Iterate through each word and determine its data type
    for (String word : words) {
        if (isString(word)) {
            typeCount.put("string", typeCount.get("string") + 1);
        } else if (isInteger(word)) {
            typeCount.put("integer", typeCount.get("integer") + 1);
        } else if (isDouble(word)) {
            typeCount.put("double", typeCount.get("double") + 1);
        }
    }

    // Print the results
    System.out.println("string " + typeCount.get("string"));
    System.out.println("integer " + typeCount.get("integer"));
    System.out.println("double " + typeCount.get("double"));
}

// Helper methods to determine the data type of a word
private static boolean isString(String word) {
    return word.matches("[a-zA-Z]+");
}

private static boolean isInteger(String word) {
    try {
        Integer.parseInt(word);
        return true;
    } catch (NumberFormatException e) {
        return false;
    }
}

private static boolean isDouble(String word) {
    try {
        Double.parseDouble(word);
        return true;
    } catch (NumberFormatException e) {
        return false;
    }
}