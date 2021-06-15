/*
This question is asked by Google.

Given two integer arrays, return their intersection.
Note: the intersection is the set of elements that are common to both arrays.

Ex: Given the following arrays...

nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []

OICE

Output: An array of the intersection of numbers
Input: Two arrays
Constraints: n/a
Edge Cases: none in common return an empty array

1. declare hash table and an results array
2. iterate through nums1 and store each one in a hash table
3. iterate through nums2
  if a value is present in the hash table
    push it into the results array

4. return the results array

T: O(n)
S: O(n)
nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]

nums1H = {
}
results = [2, 4]
*/
const intersection = () => {
  const nums1H = {};
  const results = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums1H[nums1[i]]) {
      nums1H[nums1[i]] = true;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums1H[nums2[i]]) {
      results.push(nums2[i]);
      delete nums1H[nums2[i]];
    }
  }
  return results;
}
