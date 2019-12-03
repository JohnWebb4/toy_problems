package diwaliLights;

public class DiwaliLights {
    public static long calculateLights(int n) {
        long result = 1;

        for (int i = 0; i < n; i++) {
            result *= 2;
            result %= 100000;
        }

        return result - 1;
    }
}
