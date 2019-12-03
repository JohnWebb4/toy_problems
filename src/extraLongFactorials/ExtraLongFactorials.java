package extraLongFactorials;

import java.math.BigInteger;

public class ExtraLongFactorials {
    public static BigInteger getFactorial(int n) {
        BigInteger factorial = BigInteger.valueOf(n);

        for (int factor = n - 1; factor > 0; factor--) {
            factorial = factorial.multiply(BigInteger.valueOf(factor));

        }

        return factorial;
    }
}
