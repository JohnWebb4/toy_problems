package hashTableParlor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

class IceCreamParlor {
  public static int[] getFlavorsMatchingCost(int[] cost, int money) {
    HashMap<Integer, ArrayList<Integer>> costToIds = new HashMap<>();

    for (int i = 0; i < cost.length; i++) {
      int aCost = cost[i];

      if (costToIds.get(aCost) != null) {
        ArrayList<Integer> ids = costToIds.get(aCost);
        ids.add(i);

        costToIds.put(aCost, ids);
      } else {
        ArrayList<Integer> newIds = new ArrayList<>();
        newIds.add(i);

        costToIds.put(aCost, newIds);
      }

    }

    for (Integer aCost : costToIds.keySet()) {
      if (aCost <= money) {
        int remaining = money - aCost;

        ArrayList<Integer> remainingMathcingIds = costToIds.get(remaining);

        if (remainingMathcingIds != null) {
          // Match, get ids

          ArrayList<Integer> aCostIds = costToIds.get(aCost);

          if (aCostIds != null) {
            int id1 = aCostIds.get(0);
            int id2 = remainingMathcingIds.get(0);

            if (aCost == remaining) {
              // If aCostIds == remainingMatchingIds
              id2 = aCostIds.get(1);
            }

            if (id1 < id2) {
              return new int[] { id1 + 1, id2 + 1};
            } else {
              return new int[] { id2 + 1, id1 + 1};
            }
          }
        }
      }
    }

    return null;
  }


  public static void whatFlavors(int[] cost, int money) {
    int[] flavors = getFlavorsMatchingCost(cost, money);

    System.out.println(String.join(" ", Arrays.stream(flavors).mapToObj(String::valueOf).toArray(String[]::new)));
  }
}