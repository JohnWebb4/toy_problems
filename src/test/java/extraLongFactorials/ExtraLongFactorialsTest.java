package extraLongFactorials;

import org.junit.Test;

import java.math.BigInteger;

import static org.junit.Assert.*;

public class ExtraLongFactorialsTest {

    @Test
    public void getFactorialTest() {
        assertEquals(new BigInteger("15511210043330985984000000"), ExtraLongFactorials.getFactorial(25));
    }
}