package huffmanDecoding;

import org.junit.Test;

import static org.junit.Assert.*;

public class HuffmanDecodingTest {

    @Test
    public void decode() {
        Node leafA = new Node('A', 5, null, null);
        Node leafB = new Node('B', 2, null, null);
        Node leafC = new Node('C', 1, null, null);
        Node leafD = new Node('D', 1, null, null);
        Node leafR = new Node('R', 2, null, null);

        Node nodeCD = new Node(Character.MIN_VALUE, 2, leafC, leafD);
        Node nodeBCD = new Node(Character.MIN_VALUE, 4, nodeCD, leafB);
        Node nodeBCDR = new Node(Character.MIN_VALUE, 6, leafR, nodeBCD);

        Node huffmanTree = new Node(Character.MIN_VALUE, 11, leafA, nodeBCDR);

        assertEquals("ABRACADABRA", HuffmanDecoding.decode("01111001100011010111100", huffmanTree));
    }
}