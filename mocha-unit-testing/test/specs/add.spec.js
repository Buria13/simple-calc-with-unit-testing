const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("add", function() {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    calculator = null;
  });

  it("should return 10 when called with numbers 4 and 6", function() {
    expect(calculator.add(4, 6)).to.be.equal(10);
  });

  it("should return 20 when called with numbers 3, 7 and 10", function() {
    expect(calculator.add(3, 7, 10)).to.be.equal(20);
  });
});
