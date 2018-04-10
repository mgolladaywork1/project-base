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

    it("expect test003 to be 1", () => {
      let t1 = test2.test003();
      expect(t1).toBe(1);
      expect(t1).toEqual(1);
    });
  });

  describe("Object can be equal too", () => {
    it("object equal", () => {
      let t1 = test2.test004();
      let t2 = test2.test004();
      expect(t1).toEqual(t2);
    })

  });
  //match, defined, undefined, truthy, falsy...
  //compares: contain, less, greater than...
  //foreach, before, after,
});