/*
Write a function called maxSubArraySum which accepts an array of integers
and a number called n. The function should calculate the maximum sum of n consecutive
elements in the array.

maxSubArraySum([1], 3)  // null

maxSubArraySum([2,6,9,2,1,8,5,6,3], 3)  // 19
*/

module.exports = maxSubArraySum;

function maxSubArraySum(arr, num) {
  if(arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}