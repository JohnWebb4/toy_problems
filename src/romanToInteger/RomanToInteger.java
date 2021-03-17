package romanToInteger;

public class RomanToInteger {
  public static int romanToInt(String s) {
    int count = 0;
    int previousValue = Integer.MAX_VALUE;

    for (String c : s.split("")) {
      int digit = 0;

      switch (c) {
        case "I":
          digit = 1;
          break;
        case "V":
          digit = 5;
          break;
        case "X":
          digit = 10;
          break;
        case "L":
          digit = 50;
          break;
        case "C":
          digit = 100;
          break;
        case "D":
          digit = 500;
          break;
        case "M":
          digit = 1000;
          break;
        default:
          break;
      }

      if (digit > previousValue) {
        count = count - 2 * previousValue + digit;
      } else {
        count += digit;
      }

      previousValue = digit;
    }

    return count;
  }
}
