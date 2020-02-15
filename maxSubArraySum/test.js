const maxSubArraySum = require('./index');

test('Function maxSubArraySum exists', () => {
  expect(maxSubArraySum).toBeDefined();
});

test('maxSubArraySum returns null', () => {
  expect(maxSubArraySum([1], 3)).toEqual(null);
});

test('maxSubArraySum returns correct sum', () => {
  expect(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3)).toEqual(19);
});