package arrayManipulation;

public class ArrayManipulation {
    public static long sumOperation(int n, int[][] queries) {
        long[] sumArray = new long[n];

        long maxValue = Long.MIN_VALUE;

        for (int[] query: queries) {
            int a = query[0];
            int b = query[1];
            int k = query[2];

            for (int cellIndex = a - 1; cellIndex < b; cellIndex += 1) {

                sumArray[cellIndex] += k;

                if (maxValue < sumArray[cellIndex]) {
                    maxValue = sumArray[cellIndex];
                }
            }
        }

        return maxValue;
    }
}
