/*
This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.

Ex: Given the following...

[1, 3, 8, 2], k = 10, return true (8 + 2)
[3, 9, 13, 7], k = 8, return false
[4, 2, 6, 5, 2], k = 4, return true (2 + 2)

OICE method:

Output: a boolean that represents whether or not two numbers sum to the target
Input: an array of numbers
Constraints: less than O(n) time
Edge Cases: if the array length is equal to one, return false,

Pseudo:


declare an object that will keep track of the numbers that we've seen's compliment

loop over the array
  if the value at the current array index is present in seen object
    return true
  declare a compliment variable that is equal to k minus value
  set the complement variable in the seen object to true

return false

--------------
TEST:
[4, 2, 6, 5, 2], k = 4
{
  0: true,
  2: true,
  -2: true,
  1: true,
}

*/
const twoSum = (arr, k) => {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
    }
    const compliment = k - arr[i];
    seen[compliment] = true;
  }
  return false;
};

console.log(twoSum([3, 9, 13, 7], 8));
