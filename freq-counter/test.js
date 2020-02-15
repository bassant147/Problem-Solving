const same = require('./index');

test('Same Function Exists', () => {
  expect(same).toBeDefined();
});

test('Same returns expected boolean', () => {
  expect(same([1,2,3], [4,1,9])).toEqual(true);
});

test('Same returns expected boolean', () => {
  expect(same([1,2,3], [1,9])).toEqual(false);
});

test('Same returns expected boolean', () => {
  expect(same([1,2,1], [4,4,1])).toEqual(false);
});