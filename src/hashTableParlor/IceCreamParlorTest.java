package hashTableParlor;

import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

public class IceCreamParlorTest {
  @Test
  public void testFlavors14532() {
    assertArrayEquals(new int[] { 1, 4}, IceCreamParlor.getFlavorsMatchingCost(new int[] {
        1, 4, 5, 3, 2,
    }, 4));
  }

  @Test
  public void testFlavors2243() {
    assertArrayEquals(new int[] { 1, 2 }, IceCreamParlor.getFlavorsMatchingCost(new int[] {
        2, 2, 4, 3,
    }, 4));
  }
}
