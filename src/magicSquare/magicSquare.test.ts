import { formingMagicSquare } from "./magicSquare";

describe("formingMagicSquare", () => {
  let magicSquare: number[][];

  beforeEach(() => {
    magicSquare = [[8, 3, 4], [1, 5, 9], [6, 7, 2]];
  });

  describe("when I pass a magic square", () => {
    it("should return 0", () => {
      expect(formingMagicSquare(magicSquare)).toEqual(0);
    });
  });

  describe("when I value away from a magic square", () => {
    it("should return the cost to change one value", () => {
      magicSquare[0][0] = 5;

      expect(formingMagicSquare(magicSquare)).toEqual(3);
    });
  });

  describe("test 1", () => {
    it("should return 4", () => {
      magicSquare = [[4, 8, 2], [4, 5, 7], [6, 1, 6]];

      expect(formingMagicSquare(magicSquare)).toEqual(4);
    });
  });

  describe("test 2", () => {
    it("should return 14", () => {
      magicSquare = [[4, 5, 8], [2, 4, 1], [1, 9, 7]];

      expect(formingMagicSquare(magicSquare)).toEqual(14);
    });
  });
});
