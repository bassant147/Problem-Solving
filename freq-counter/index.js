/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has
its corresponding value squared in the second array.
The frequency of values must be the same.

same([1,2,3], [4,1,9])  // true

same([1,2,3], [1,9])  // false

same([1,2,1], [4,4,1])  // false
*/

module.exports = same;

function same(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};

  for(let value of arr1) {
    obj1[value] = ( obj1[value] || 0) + 1;
  }

  for(let value of arr2) {
    obj2[value] = ( obj2[value] || 0) + 1;
  }

  for(let key in obj1) {
    if( !(obj2[key**2]) ) 
      return false;
    if( obj1[key] !== obj2[key**2])
      return false;
  }

  return true;
}

