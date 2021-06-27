/*
This question is asked by Amazon. Given two arrays of numbers, where the first array is a subset of the second array, return an array containing all the next greater elements for each element in the first array, in the second array. If there is no greater element for any element, output -1 for that number.

Ex: Given the following arrays…

nums1 = [4,1,2], nums2 = [1,3,4,2], return [-1, 3, -1] because no element in nums2 is greater than 4, 3 is the first number in nums2 greater than 1, and no element in nums2 is greater than 2.
nums1 = [2,4], nums2 = [1,2,3,4], return [3, -1] because 3 is the first greater element that occurs in nums2 after 2 and no element is greater than 4.

Brute force:
declare an empty array

for each number in nums 1:
  find the index of nums 2
  if that indexes next number is greater
    push that num into array
  else
    push -1 into the array
return the array

*/

var nextGreaterElement = function (nums1, nums2) {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    const idx2 = nums2.indexOf(nums1[i]);
    if (nums2[idx2 + 1] && nums2[idx2 + 1] > nums2[idx2]) {
      result.push(nums2[idx2 + 1]);
    } else {
      result.push(-1);
    }
  }
  return result;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
