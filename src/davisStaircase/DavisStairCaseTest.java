package davisStaircase;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DavisStairCaseTest {
    @Test
    public void stepParams1() {
        assertEquals(DavisStairCase.stepPerms(1), 1);
    }

    @Test
    public void stepParams3() {
        assertEquals(DavisStairCase.stepPerms(3), 4);
    }

    @Test
    public void stepParams5() {
        assertEquals(DavisStairCase.stepPerms(5), 13);
    }

    @Test
    public void stepParams7() {
        assertEquals(DavisStairCase.stepPerms(7), 44);
    }
}