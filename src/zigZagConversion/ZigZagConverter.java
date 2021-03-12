package zigZagConversion;

public class ZigZagConverter {
	public static String convertZigZag(String input, int numRows) {
		if (numRows < 0) {
			return input;
		}

		StringBuilder sb = new StringBuilder();
		int loopSize;
		if (numRows == 1) {
			loopSize = 1;
		} else if (numRows == 2) {
			loopSize = 2;
		} else {
			loopSize = 2 * numRows - 2;
		}

		for (int i = 0; i < numRows; i++) {
			int j = i;

			if (i == 0 || i == numRows - 1) {
				while (j < input.length()) {
					sb.append(input.charAt(j));
					j += loopSize;
				}
			} else {
				int step = loopSize - 2 * i;

				while (j < input.length()) {
					sb.append(input.charAt(j));

					j += step;
					step = loopSize - step;
				}
			}
		}

		return sb.toString();
	}
}
