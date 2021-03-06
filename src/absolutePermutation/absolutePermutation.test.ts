import { absolutePermutation } from "./absolutePermutation";

describe("absolute permutation", () => {
  it.each`
    n     | k    | result
    ${2}  | ${1} | ${[2, 1]}
    ${3}  | ${0} | ${[1, 2, 3]}
    ${3}  | ${2} | ${[-1]}
    ${10} | ${0} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    ${10} | ${1} | ${[2, 1, 4, 3, 6, 5, 8, 7, 10, 9]}
    ${7}  | ${0} | ${[1, 2, 3, 4, 5, 6, 7]}
    ${10} | ${9} | ${[-1]}
    ${9}  | ${0} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    ${10} | ${3} | ${[-1]}
    ${8}  | ${2} | ${[3, 4, 1, 2, 7, 8, 5, 6]}
    ${8}  | ${0} | ${[1, 2, 3, 4, 5, 6, 7, 8]}
    ${7}  | ${0} | ${[1, 2, 3, 4, 5, 6, 7]}
    ${10} | ${1} | ${[2, 1, 4, 3, 6, 5, 8, 7, 10, 9]}
  `("should handle $n, $k = $result", ({ n, k, result }) => {
    expect(absolutePermutation(n, k)).toEqual(result);
  });
});
