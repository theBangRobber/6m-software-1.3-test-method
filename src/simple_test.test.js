// use the function from sample.js
const { addFunc, isDivisibleBy5, checkOddEvent } = require("./sample");

// create the test suite
describe("Test Suite for sample.js functions", () => {
  // write the test
  it("should add 3 numbers", () => {
    const result = addFunc(1, 3, 4);
    expect(result).toBe(8);
  });

  // Activity: Write a test that tests the function of isDivisibleBy5 and make it pass
  it("should be divisible by 5", () => {
    const result = isDivisibleBy5(11);
    expect(result).toBe(false);
  });

  // Test Driven Development
  // Step 1: write the test
  it("should check if odd or even", () => {
    const result = checkOddEvent(13);
    expect(result).toBe("odd");
  });
});
