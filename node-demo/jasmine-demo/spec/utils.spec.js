const utils = require("../utils/utils");

// Define some suites : DESCRIBE()
// Define some tests : IT()

describe("Test Suites 1 : ", () => {
  it("Test 01:", () => {
    expect(true).toBeTruthy();
  });

  it("Test 02", () => {
    let result = utils.add(5, 3);

    expect(result).toBe(8);
  });

  it("should work for objects", function() {
    var foo = {
      a: 12,
      b: 34
    };
    var bar = {
      a: 12,
      b: 34
    };
    expect(foo).toEqual(bar);
  });

  var foo;

  beforeEach(() => {
    foo = 0;
  });

  it("", () => {
    foo += 1;
    expect(foo).toBe(1);
  });

  it("", () => {
    foo += 2;
    expect(foo).toBe(2);
  });

  //   afterAll(()=>{
  //     foo = 0;
  //   })
});
