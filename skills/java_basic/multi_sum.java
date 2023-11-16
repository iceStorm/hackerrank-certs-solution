import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Arithmetic {
    int sum(int[] arr) {
        int total = 0;
        
        for (int num : arr) {
            total += num;
        }
        
        return total;
    }
    
    String sum(String[] arr) {
        StringBuilder sb = new StringBuilder();
        
        for (String str : arr) {
            sb.append(str);
        }
        
        return sb.toString();
    }
    
    static boolean isNumeric(String strNum) {
        if (strNum == null) {
            return false;
        }
        try {
            int d = Integer.parseInt(strNum);
            return true;
        } catch (NumberFormatException nfe) {
            return false;
        }
    }
    
    static boolean isIntegerArray(String[] elements) {
        for (String element : elements) {
            if (!isNumeric(element)) {
                return false;
            }
        }
        
        return true;
    }
    
    public static void main(String args[] ) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
        Scanner in = new Scanner(System.in);
        String input = in.nextLine();
        String[] elements = input.split(" ");
        
        Arithmetic summer = new Arithmetic();
        
        // System.out.println(String.format("input: %s", input));
        // System.out.println("Length: " + elements.length);
        
        if (!isIntegerArray(elements)) {
            System.out.println(summer.sum(elements));
        } else {
            int[] nums = new int[elements.length];
            
            for (int i = 0; i< elements.length; ++i) {
                nums[i] = Integer.parseInt(elements[i]);
            }
            
            System.out.println(summer.sum(nums));
        }
    }
}
