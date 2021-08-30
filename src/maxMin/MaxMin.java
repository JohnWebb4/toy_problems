package maxMin;

import java.util.LinkedList;
import java.util.List;

public class MaxMin {
    public static int maxMin(int k, List<Integer> arr) {
        List<Integer> sortedList = new LinkedList<>(arr);
        sortedList.sort(Integer::compareTo);

        Integer minDiff = Integer.MAX_VALUE;

        for (int i = 0; i < arr.size() - k + 1; i++) {
            int min = sortedList.get(0);
            int max = sortedList.get(k - 1);
            Integer diff = Math.abs(max - min);

            if (diff < minDiff) {
                minDiff = diff;
            }

            sortedList.remove(0);
        }


        return minDiff;
    }
}