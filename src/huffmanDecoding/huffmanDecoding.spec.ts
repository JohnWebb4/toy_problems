import { decodeHuff, Node } from "./huffmanDecoding";

describe("Huffman Decoding", () => {
  describe("when I decode '1001011'", () => {
    it("should return 'ABACA'", () => {
      const leafA = new Node("A", 3, null, null);
      const leafB = new Node("B", 1, null, null);
      const leafC = new Node("C", 1, null, null);

      const nodeBC = new Node(null, 2, leafB, leafC);
      const huffmanTree = new Node(null, 5, nodeBC, leafA);

      expect(decodeHuff("1001011", huffmanTree)).toEqual("ABACA");
    });
  });

  describe("when I decode '01111001100011010111100'", () => {
    it("should return 'ABRACADABRA'", () => {
      const leafA = new Node("A", 5, null, null);
      const leafB = new Node("B", 2, null, null);
      const leafC = new Node("C", 1, null, null);
      const leafD = new Node("D", 1, null, null);
      const leafR = new Node("R", 2, null, null);

      const nodeCD = new Node(null, 2, leafC, leafD);
      const nodeBCD = new Node(null, 4, nodeCD, leafB);
      const nodeBCDR = new Node(null, 6, leafR, nodeBCD);

      const huffmanTree = new Node(null, 11, leafA, nodeBCDR);

      expect(
        decodeHuff("01111001100011010111100",
        huffmanTree
      )).toEqual("ABRACADABRA");
    });
  });
});
