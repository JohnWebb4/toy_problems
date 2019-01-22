class Node {
  public data: string | null;
  public frequency: number;
  public left: Node | null;
  public right: Node | null;

  public constructor(
    data: string | null,
    frequency: number,
    left: Node | null,
    right: Node | null
  ) {
    this.data = data;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }
}

function decodeHuff(encodedString: string, huffmanTree: Node) {
  let decodedWord = "";
  let codeWord = "";

  for (const char of encodedString) {
    codeWord = codeWord + char;

    const currentNode = gotoNode(codeWord, huffmanTree);

    if (currentNode.data) {
      decodedWord += currentNode.data;

      codeWord = "";
    }
  }

  return decodedWord;
}

function gotoNode(codeWord: string, huffmanTree: Node) {
  let treeNode = huffmanTree;

  for (const codeChar of codeWord) {
    if (codeChar === "1") {
      if (treeNode.right) {
        treeNode = treeNode.right;
      } else {
        throw Error("Bad code word");
      }
    } else if (codeChar === "0") {
      if (treeNode.left) {
        treeNode = treeNode.left;
      } else {
        throw Error("Bad code word");
      }
    } else {
      throw Error("Invalid character in codeWord");
    }
  }

  return treeNode;
}

export { decodeHuff, Node };
