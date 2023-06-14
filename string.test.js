const string = require('./string');

let str = '';
// test for stringLength between 1 and 10
for (let i = 0; i <= 9; i++) {
    test(`String length = ${i + 1}`, () => {
    str += `${i}`;
    expect(string.stringLength(str)).toBe(i + 1);
  });
}

// test for stringLength < 1 and > 10
test('String length = 11', () => {
  expect(string.stringLength('12345678910')).toBe(11);
});
test('String length = 0', () => {
  expect(string.stringLength('')).toBe(0);
});

// test for reverseString
test('Reverse string', () => {
  expect(string.reverseString('123456789')).toBe('987654321');
});

// test for capitalize
test('First Character Capitalized', () => {
  expect(string.capitalize('hello')).toBe('Hello');
});