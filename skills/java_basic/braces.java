static boolean isBalanced(String s) 
{
    Stack<Character> stack = new Stack<>();

    for (char ch : s.toCharArray()) {
        if (ch == '(' || ch == '{' || ch == '[') {
            stack.push(ch);
        } else if (ch == ')' && !stack.isEmpty() && stack.peek() == '(') {
            stack.pop();
        } else if (ch == '}' && !stack.isEmpty() && stack.peek() == '{') {
            stack.pop();
        } else if (ch == ']' && !stack.isEmpty() && stack.peek() == '[') {
            stack.pop();
        } else {
            return false; // Unmatched closing bracket or invalid character
        }
    }

    return stack.isEmpty(); // If the stack is empty, all brackets are matched
}
