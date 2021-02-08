package courseSchedule;

import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class CourseScheduleTest {
  public static int[][] test1Prerequisites = new int[][] {new int[] {1, 0}};
  public static int[][] test2Prerequisites =
      new int[][] {
        new int[] {1, 0},
        new int[] {0, 1}
      };

  @Test
  public void canFinishAllCoursesLinear() {
    assertTrue(CourseSchedule.canFinishAllCourses(2, test1Prerequisites));
  }

  @Test
  public void canFinishAllCoursesCyclic() {
    assertFalse(CourseSchedule.canFinishAllCourses(2, test2Prerequisites));
  }
}
