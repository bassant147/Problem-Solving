const sumZero = require('./index');

test('Function sumZero exists', () => {
  expect(sumZero).toBeDefined();
});

test('sumZero returns the array of the first pair', () => {
  expect(sumZero([-3,-2,-1,0,1,2,3])).toEqual([-3,3]);
});

test('sumZero returns undefined', () => {
  expect(sumZero([-2,0,1,3])).toEqual(undefined);
});

test('sumZero returns the array of the first pair', () => {
  expect(sumZero([-5,-2,2])).toEqual([-2,2]);
});

test('sumZero returns undefined', () => {
  expect(sumZero([1,2,3])).toEqual(undefined);
});