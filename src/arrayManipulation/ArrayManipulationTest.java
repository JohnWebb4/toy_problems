package arrayManipulation;

import org.junit.Test;

import static org.junit.Assert.*;

public class ArrayManipulationTest {

    public void sumOperationTime() {
        int [][] queriesMany = new int[1000000][3];

        for (int queryIndex = 0; queryIndex < queriesMany.length; queryIndex += 1) {
            if (queryIndex < queriesMany.length - 2) {
                queriesMany[queryIndex] = new int[] {queryIndex + 1, queryIndex + 3, 3};
            } else {
                queriesMany[queryIndex] = new int[] { queryIndex - 2, queryIndex, 3};
            }
        }

        assertEquals(15, ArrayManipulation.sumOperation( queriesMany.length, queriesMany));
    }

    @Test
    public void sumOperation() {
        int[][] queries = {
                { 1, 2, 100 },
                { 2, 5, 100 },
                { 3, 4, 100 }
        };
        assertEquals(200, ArrayManipulation.sumOperation(10, queries));

        int [][] queriesLarge = {
                { 1, 2, 2000000000 },
                { 2, 5, 2000000000 },
                { 3, 4, 2000000000 }
        };


        assertEquals(4000000000L, ArrayManipulation.sumOperation(10, queriesLarge));

        Thread thread = new Thread(() -> {
            this.sumOperationTime();
        });


        try {
            thread.start();

            thread.join(1000);
        } catch(InterruptedException e) {

        }

        assertTrue(!thread.isAlive());
    }
}