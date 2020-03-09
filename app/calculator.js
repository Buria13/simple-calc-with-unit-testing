class Calculator {
  add(...args) {
    return args.reduce((el, result) => (result += el));
  }

  multiply(...args) {
    return args.reduce((el, result) => (result *= el));
  }
}

module.exports = Calculator;
