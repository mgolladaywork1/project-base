import { Test321 } from "../src/Test321";

describe("Test321", () => {
  let test2 = new Test321("Is it True?");
 
  it("Test001 to be True", () => {
    let test1 = new Test321("It is True");

    let result = test1.test001();

    expect(result).toBe(true);
  });

  it("Test002 to be not True", () => {
    let result = test2.test002();
    expect(result).not.toBe(true);
  });

  describe("To Be using ===", () => {
    it("to be the same, true", () => {
      let t1 = test2.test003();
      let t2 = t1;

      expect(t2).toBe(t1);
      expect(t1).not.toBe(null);
    });
  });

});