package biggerIsGreater;

import java.util.Arrays;

// No lower case letters
// No answer if all characters the same
public class BiggerIsGreater {
	public static String biggerIsGreater(String w) {
		String nextLargest = "";

		for (int i = w.length() - 2; i >= 0; i--) {
			if (w.charAt(w.length() - 1) > w.charAt(i) || i == 0) {
				// Get next largest char
				int nextLargestCharIndex = i;

				for (int j = w.length() - 1; j > i; j--) {
					if (w.charAt(j) > w.charAt(i) && (w.charAt(j) < w.charAt(nextLargestCharIndex) || nextLargestCharIndex == i)) {
						nextLargestCharIndex = j;
					}
				}

				String nextLargestForColumn = "";
				if (nextLargestCharIndex > i) {
					String[] remainingString = (w.substring(i, nextLargestCharIndex) + w.substring(nextLargestCharIndex + 1)).split("");
					Arrays.sort(remainingString);
					nextLargestForColumn = w.substring(0, i) + w.charAt(nextLargestCharIndex) + String.join("", remainingString);
				}


				if (nextLargestForColumn.compareTo(w) > 0) {
					nextLargest = nextLargestForColumn;
					break;
				}
			}
		}

		if (nextLargest.equals("")) {
			return "no answer";
		}

		return nextLargest;
	}
}
