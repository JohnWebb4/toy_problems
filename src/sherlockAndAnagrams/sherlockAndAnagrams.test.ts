import { getAnagramCount } from "./sherlockAndAnagrams";

describe("sherlockAndAnagrams", () => {
  it("should return 4 for abba", () => {
    expect(getAnagramCount("abba")).toEqual(4); // 2 * 2
  });

  it("should return 0", () => {
    expect(getAnagramCount("abcd")).toEqual(0); // 0
  });

  it("should return 3", () => {
    expect(getAnagramCount("ifailuhkqq")).toEqual(3); // 2
  });

  it("should equal 10", () => {
    expect(getAnagramCount("kkkk")).toEqual(10);
  });

  it("should return 399", () => {
    expect(
      getAnagramCount(
        "ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel"
      )
    ).toEqual(399);
  });
});
