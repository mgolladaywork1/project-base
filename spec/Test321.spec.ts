import { Test321 } from "../src/Test321";

describe("Test321", () => {
  const test2 = new Test321("Is it True?");

  it("Test001 to be True", () => {
    const test1 = new Test321("It is True");

    const result = test1.test001();

    expect(result).toBe(true);
  });

  it("Test002 to be not True", () => {
    const result = test2.test002();
    expect(result).not.toBe(true);
  });

  describe("To Be using ===", () => {
    it("to be the same, true", () => {
      const t1 = test2.test003();
      const t2 = t1;

      expect(t2).toBe(t1);
      expect(t1).not.toBe(null);
    });

    it("expect test003 to be 1", () => {
      const t1 = test2.test003();
      expect(t1).toBe(1);
      expect(t1).toEqual(1);
    });
  });

  describe("Object can be equal too", () => {
    it("object equal", () => {
      const t1 = test2.test004();
      const t2 = test2.test004();
      expect(t1).toEqual(t2);
    });

  });
  // match, defined, undefined, truthy, falsy...
  it("toMatch a regular expressions", () => {
    const address = "1234 Main St. Irvine, CA";
    expect(address).toMatch(/CA/);
    expect(address).toMatch("Irvine");
    expect(address).not.toMatch("NY");
    expect(address).toContain("1234");
  });
  xit("toBeDefined' and undefined", () => {
    const a = {
      firstname: "John",
      lastname: "Smith",
      middlename: ""
    };
    expect(a.firstname).toBeDefined();
    expect(a.middlename).not.toBeNull();
    expect(a.lastname.length).toBeGreaterThan(a.middlename.length);
  });

  // compares: contain, less, greater than...
  // foreach, before, after,
  describe("My spy", () => {
    let tom: { setHouse: (value: string) => string} ;
    let jerry: string = null;

    // tslint:disable-next-line:only-arrow-functions
    beforeEach(function() {
      tom = {
        setHouse(value: string): string {
          jerry = value;
          return jerry;
        }
      };
      spyOn(tom, "setHouse");

      tom.setHouse("A Mouse");
      tom.setHouse("A Rat");
    });

    it("tracks that the spy was called", () => {
      expect(tom.setHouse).toHaveBeenCalled();
    });
  });
});
