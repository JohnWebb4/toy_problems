package huffmanDecoding;

public class Node {
    public char data;
    public int frequency;
    public Node left;
    public Node right;

    public static Node goToNodeByCodeWord(String codeWord, Node huffmanTree) throws IllegalArgumentException {
        Node currentNode = huffmanTree;

        for (char codeChar: codeWord.toCharArray()) {
            if (codeChar == '0') {
                if (currentNode.left != null) {
                    currentNode = currentNode.left;
                } else {
                    throw new IllegalArgumentException("Bad Code Word");
                }
            } else if (codeChar == '1') {
                if (currentNode.right != null) {
                    currentNode = currentNode.right;
                } else {
                    throw new IllegalArgumentException("Bad Code Word");
                }
            } else {
                throw new IllegalArgumentException("Bad Code Word");
            }
        }

        return currentNode;
    }

    public Node(char data, int frequency, Node left, Node right) {
        this.data = data;
        this.frequency = frequency;
        this.left = left;
        this.right = right;
    }
}
