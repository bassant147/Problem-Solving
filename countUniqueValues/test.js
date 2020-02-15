const countUniqueValues = require('./index');

test('Function countUniqueValues exists', () => {
  expect(countUniqueValues).toBeDefined();
});

test('countUniqueValues counted the unique values', () => {
  expect(countUniqueValues([1,1,1,1,1,2])).toEqual(2);
});

test('countUniqueValues counted the unique values', () => {
  expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toEqual(7);
});

test('countUniqueValues counted the unique values', () => {
  expect(countUniqueValues([-2,-1,-1,0,1])).toEqual(4);
});