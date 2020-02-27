import { countSockPairs } from "./sockMerchant";

describe("sockMerchant", () => {
  it("should return 2 for number of sock pairs", () => {
    expect(countSockPairs([1, 2, 1, 2, 1, 3, 2])).toBe(2);
  });

  it("should return 3 for number of sock pairs", () => {
    expect(countSockPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });
});
