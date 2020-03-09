const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("multiply", function() {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    calculator = null;
  });

  it("should return 15 when called with numbers 3 and 5", function() {
    expect(calculator.multiply(3, 5)).to.be.equal(15);
  });

  it("should return 3000 when called with number 3, 5, 10 and 20", function() {
    expect(calculator.multiply(3, 5, 10, 20)).to.be.equal(3000);
  });
});
