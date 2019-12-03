import { isFibo, addStringNumbers } from "./isFibo";

describe("isFibo", () => {
  describe.each`
    value                                                                                                          | result
    ${5}                                                                                                           | ${"IsFibo"}
    ${7}                                                                                                           | ${"IsNotFibo"}
    ${8}                                                                                                           | ${"IsFibo"}
    ${"354224848179261915075"}                                                                                     | ${"IsFibo"}
    ${"222232244629420445529739893461909967206666939096499764990979600"}                                           | ${"IsFibo"}
    ${"139423224561697880139724382870407283950070256587697307264108962948325571622863290691557658876222521294125"} | ${"IsFibo"}
  `("when $value", ({ value, result }: any) => {
    it(`should return ${result}`, () => {
      expect(isFibo(value)).toEqual(result);
    });
  });

  describe("addStringNumbers", () => {
    it("should add 1 and 2 to three", () => {
      expect(addStringNumbers("1", "2")).toEqual("3");
    });

    it("should add 5 and 6 to 11", () => {
      expect(addStringNumbers("5", "6")).toEqual("11");
    });

    it("should add 1000 and 482", () => {
      expect(addStringNumbers("1000", "482")).toEqual("1482");
    });

    it("should add 987654321 and 123456789", () => {
      expect(addStringNumbers("987654321", "123456789")).toEqual("1111111110");
    });
  });
});
