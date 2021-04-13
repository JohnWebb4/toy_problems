package davisStaircase;

// Input number of steps
// Output number of permutations

// Edge cases
// 0 steps = 0
// negative steps throw error

// Case 0: 0
// Case 1: 1
// Case 2: 2
// Case 3: 4

import java.util.HashMap;
import java.util.Stack;

// If base case: return value
// Otherwise iterate. It's sum of n - 1, n - 1, n - 3
// Save value in hash map (prioritizes quick reads)
public class DavisStairCase {
  static int stepPerms(int n) throws IllegalArgumentException {
    // Base cases
    if (n < 0) {
      throw new IllegalArgumentException("Cannot have negative number");
    } else if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else if (n == 2) {
      return 2;
    } else if (n == 3) {
      return 4;
    }

    HashMap<Integer, Integer> cachedSums = new HashMap<>();

    // Put base cases in cache
    cachedSums.put(0, 0);
    cachedSums.put(1, 1);
    cachedSums.put(2, 2);
    cachedSums.put(3, 4);

    Stack<Integer> toCheck = new Stack<>();
    toCheck.add(n);

    while (toCheck.size() > 0) {
      Integer value = toCheck.pop();

      if (cachedSums.containsKey(value)) {
        continue;
      } else {
        boolean hasLess1 = cachedSums.containsKey(value - 1);
        boolean hasLess2 = cachedSums.containsKey(value - 2);
        boolean hasLess3 = cachedSums.containsKey(value - 3);

        if (hasLess1 && hasLess2 && hasLess3) {
          int valueLess1 = cachedSums.get(value - 1);
          int valueLess2 = cachedSums.get(value - 2);
          int valueLess3 = cachedSums.get(value - 3);

          cachedSums.put(value, valueLess1 + valueLess2 + valueLess3);
        } else {
          // Add back to stack
          toCheck.add(value);

          if (!hasLess1) {
            toCheck.add(value - 1);
          }
          if (!hasLess2) {
            toCheck.add(value - 2);
          }
          if (!hasLess3) {
            toCheck.add(value - 3);
          }
        }
      }
    }

    return cachedSums.get(n);
  }
}
