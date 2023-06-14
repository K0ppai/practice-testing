const Calculator = require('./calculator');

const math = new Calculator();

describe('Calculator', () => {
  test('add', () => {
    expect(math.add(1, 2)).toBe(3);
  });
  test('subtract', () => {
    expect(math.subtract(1, 2)).toBe(-1);
  });
  test('divide', () => {
    expect(math.divide(1, 2)).toBe(0.5);
  });
  test('multiply', () => {
    expect(math.multiply(3, 2)).toBe(6);
  });
});