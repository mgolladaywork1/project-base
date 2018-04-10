import { Test321 } from "../src/Test321";

describe("Test321", () => {
  it("Test001 to be True", () => {
    let test1 = new Test321("It is True");

    let result = test1.test001();

    expect(result).toBe(true);
  })


});