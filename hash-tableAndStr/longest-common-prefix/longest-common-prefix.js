/*
This question is asked by Microsoft. Given an array of strings, return the longest common prefix that is shared amongst all strings.
Note: you may assume all strings only contain lowercase alphabetical characters.

ex:
["colorado", "color", "cold"], return "col"
["a", "b", "c"], return ""
["spot", "spotty", "spotted"], return "spot"
*/

/*
OICE

Output: a string representing the longest common prefix
Input: an array of strings
Constraints: O(n) < less time and O(1) space
Edge Cases: no matches => empty string, strs.length = 0 => null

["colorado", "color", "cold"]
result = 'col'
sorted: ["cold", "color", "colorado"]

fVal: 'd'
lVal: 'o'

return 'col'

Pseudo:
1. declare a results variable which would be an empty string
2. sort the array into alphabetical order
3. loop over the array comparing the first and last elements
  if the values of the first and last are the same, then concat that value to the string
  break if the two do not equal each other
4. return result
*/

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return null;
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let result = '';

  strs = strs.sort(); // nlogn

  for (let i = 0; i < strs[0].length; i++) {
    //n
    if (strs[0][i] === strs[strs.length - 1][i]) {
      result += strs[0][i];
    } else {
      break;
    }
  }
  return result;
}
// nlogn

console.time('prob');
longestCommonPrefix(['colorado', 'color', 'cold']);
console.timeEnd('prob');
