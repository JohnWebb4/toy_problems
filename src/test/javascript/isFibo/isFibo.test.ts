/* tslint:disable  max-line-length*/
import { isFibo } from "../../../main/javascript/isFibo/isFibo";

describe("isFibo", () => {
  describe.each`
    value                                                                                                         | result
    ${5}                                                                                                          | ${"IsFibo"}
    ${7}                                                                                                          | ${"IsNotFibo"}
    ${8}                                                                                                          | ${"IsFibo"}
    ${354224848179261915075n}                                                                                     | ${"IsFibo"}
    ${222232244629420445529739893461909967206666939096499764990979600n}                                           | ${"IsFibo"}
    ${139423224561697880139724382870407283950070256587697307264108962948325571622863290691557658876222521294125n} | ${"IsFibo"}
  `("when $value", ({ value, result }: any) => {
    it(`should return ${result}`, () => {
      expect(isFibo(value)).toEqual(result);
    });
  });
});
