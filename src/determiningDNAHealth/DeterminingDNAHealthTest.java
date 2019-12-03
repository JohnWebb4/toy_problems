package determiningDNAHealth;

import org.junit.Test;

import static org.junit.Assert.*;

public class DeterminingDNAHealthTest {
    DeterminingDNAHealth dnaHealth;

    @Test
    public void getDNAHealth() {
        String[] genes = { "a", "b", "c", "aa", "d", "b" };
        int[] health = { 1, 2, 3, 4, 5, 6 };

        dnaHealth = new DeterminingDNAHealth(genes, health);

        assertArrayEquals(new int[]{0, 19}, dnaHealth.getDNAHealth(new Dna[]{
                new Dna("caaab", 1, 5),
                new Dna("xyz", 0 ,4),
                new Dna("bcdybc", 2, 4),
        }));
    }
}