package courseSchedule;

import java.util.*;

public class CourseSchedule {
  public static class Node {
    public final int value;
    public final List<Node> prerequisites;
    public final List<Node> requiredBy;

    public Node(int value) {
      this.value = value;
      this.prerequisites = new LinkedList<>();
      this.requiredBy = new LinkedList<>();
    }

    public void remove() {
      for (Node requiredClasses : this.requiredBy) {
        requiredClasses.prerequisites.remove(this);
      }
    }
  }

  public static boolean canFinishAllCourses(int numCourses, int[][] prerequisites) {
    Map<Integer, Node> classMap = new HashMap<>();

    for (int[] prerequisite : prerequisites) {
      Node aClass;
      Node prerequisiteClass;
      if (classMap.containsKey(prerequisite[0])) {
        aClass = classMap.get(prerequisite[0]);
      } else {
        aClass = new Node(prerequisite[0]);
        classMap.put(prerequisite[0], aClass);
      }

      if (classMap.containsKey(prerequisite[1])) {
        prerequisiteClass = classMap.get(prerequisite[1]);
      } else {
        prerequisiteClass = new Node(prerequisite[1]);
        classMap.put(prerequisite[1], prerequisiteClass);
      }

      aClass.prerequisites.add(prerequisiteClass);
      prerequisiteClass.requiredBy.add(aClass);
    }

    boolean hasZeroDegreeClass;
    Set<Node> hasSeen = new HashSet<>();
    Stack<Node> topologicalOrder = new Stack<>();
    do {
      hasZeroDegreeClass = false;

      for (Node aClass : classMap.values()) {
        if (hasSeen.contains(aClass)) {
          continue;
        }

        if (aClass.requiredBy.size() == 0) {
          for (Node prerequisiteCourse : aClass.prerequisites) {
            prerequisiteCourse.requiredBy.remove(aClass);
          }

          topologicalOrder.add(aClass);
          hasSeen.add(aClass);
          hasZeroDegreeClass = true;
        }
      }
    } while (hasZeroDegreeClass);

    return topologicalOrder.size() <= numCourses && hasSeen.size() == classMap.size();
  }
}
