import { getAllCombinationsAsString } from "./kCandyStore";

describe("kCandyStore", () => {
  it("should return correct combinations for 3, 2, 4, 5", () => {
    expect(getAllCombinationsAsString([2, 4, 5])).toEqual(`1 2 1
1 4 6 4 1
1 5 10 10 5 1`);
  });
});
