const sum = require('./sum');
test("Properly adds two number", () => {
  expect(sum(1, 2)).toBe(3);
});