import { getBlackJackPermutations } from "./blackJack";

interface IDescribeValues {
  value: number;
  result: number;
}

describe("blackJac", () => {
  describe("when missing", () => {
    it("should return the result for 28280", () => {
      expect(getBlackJackPermutations()).toEqual(28280);
    });
  });

  describe.each`
    value | result
    ${1}  | ${1}
    ${2}  | ${2}
    ${3}  | ${4}
    ${4}  | ${7}
    ${5}  | ${12}
    ${6}  | ${20}
  `("when $value", ({ value, result }: IDescribeValues) => {
    it(`should return ${result}`, () => {
      expect(getBlackJackPermutations(value)).toEqual(result);
    });
  });
});
