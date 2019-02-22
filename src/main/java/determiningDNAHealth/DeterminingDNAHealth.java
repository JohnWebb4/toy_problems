package determiningDNAHealth;

public class DeterminingDNAHealth {
    String[] genes;
    int[] health;

    public DeterminingDNAHealth(String[] genes, int[] health) {
        this.genes = genes;
        this.health = health;
    }

    public int[] getDNAHealth(Dna[] dnas) {
        int maxHealth = 0;
        int minHealth = Integer.MAX_VALUE;

        for (Dna dna : dnas) {
            int health = 0;

            for (int i = dna.first; i <= dna.last; i++) {
                int subStringIndex = dna.d.indexOf(this.genes[i]);

                while (subStringIndex != -1) {
                    if (subStringIndex != -1) {
                        health += this.health[i];
                    }

                    subStringIndex = dna.d.indexOf(this.genes[i], subStringIndex + 1);
                }
            }

            if (health < minHealth) {
                minHealth = health;
            }

            if (health > maxHealth) {
                maxHealth = health;
            }
        }

        int[] result = { minHealth, maxHealth };

        return result;
    }
}
