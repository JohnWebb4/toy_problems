package maxMin;

import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class MaxMinTest {
    @Test
    public void maxMinTest() {
        assertEquals(20, MaxMin.maxMin(3, Arrays.asList(
                10,
                100,
                300,
                200,
                1000,
                20,
                30
        )));

        assertEquals(3, MaxMin.maxMin(4, Arrays.asList(
                1,
                2,
                3,
                4,
                10,
                20,
                30,
                40,
                100,
                200
        )));

        assertEquals(0, MaxMin.maxMin(2, Arrays.asList(
                1,
                2,
                1,
                2,
                1
        )));

        assertEquals(816, MaxMin.maxMin(8, Arrays.asList(
                6327,
                571,
                6599,
                479,
                7897,
                9322,
                4518,
                571,
                6677,
                7432,
                815,
                6920,
                4329,
                4104,
                7775,
                5708,
                7991,
                5802,
                8619,
                6053,
                7539,
                7454,
                9000,
                3267,
                6343,
                7165,
                4095,
                439,
                5621,
                4095,
                153,
                1948,
                1018,
                6752,
                8779,
                5267,
                2426,
                9649,
                2190,
                9103,
                7081,
                3006,
                2376,
                7762,
                3462,
                151,
                3471,
                1453,
                2305,
                8442
        )));

        assertEquals(2, MaxMin.maxMin(3, Arrays.asList(
                100,
                200,
                300,
                350,
                400,
                401,
                402
        )));
    }

}