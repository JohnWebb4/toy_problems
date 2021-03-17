package romanToInteger;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RomanToIntegerTest {
  @Test
  public void romanToIntTestIII() {
    assertEquals(3, RomanToInteger.romanToInt("III"));
  }

  @Test
  public void romanToIntTestIV() {
    assertEquals(4, RomanToInteger.romanToInt("IV"));
  }

  @Test
  public void romanToIntTestIX() {
    assertEquals(9, RomanToInteger.romanToInt("IX"));
  }

  @Test
  public void romanToIntTestLVIII() {
    assertEquals(58, RomanToInteger.romanToInt("LVIII"));
  }

  @Test
  public void romanToIntTestMCMXCIV() {
    assertEquals(1994, RomanToInteger.romanToInt("MCMXCIV"));
  }
}
