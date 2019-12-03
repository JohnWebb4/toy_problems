package huffmanDecoding;

public class HuffmanDecoding {
    public static String decode(String encodedString, Node huffmanTree) {
        String decodedString = "";
        String codeWord = "";

        for (char codeChar : encodedString.toCharArray()) {
            codeWord += codeChar;
            Node currentNode = Node.goToNodeByCodeWord(codeWord, huffmanTree);

            if (currentNode.data != Character.MIN_VALUE) {
                decodedString += currentNode.data;
                codeWord = "";
            }
        }

        return decodedString;
    }
}
