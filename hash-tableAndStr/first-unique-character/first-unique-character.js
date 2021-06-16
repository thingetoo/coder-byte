/*
This question is asked by Microsoft.

Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

Ex: Given the following strings...

"abcabd", return 2
"thedailybyte", return 1
"developer", return 0

OICE:
Output: an index representing the first unique character
Input: a string
Constraints:  < O(n)
Edge Cases: if a unique character doesn't exist, return - 1

declare a hash table to keep track of uniques

loop through the string
  if the string in the hash is undefined
    store the letter and its index
  if the string is null
    continue
  if the letter at the hash table is greater than or equal 0
    set that letter in the hash equal to null

let firstUnqiue = Infinity;

loop through the object
  if object value >= 0
    set firt unique to the min between itself and the object value


return firstUnique === Infinity ? -1 : firstUnique
*/

const firstUniqueCharacter = (str) => {
  const isUnique = {};
  for (let i = 0; i < str.length; i++) {
    if (isUnique[str[i]] === null) {
      continue;
    }
    if (isUnique[str[i]] === undefined) {
      isUnique[str[i]] = i;
    } else if (typeof isUnique[str[i]] === 'number') {
      isUnique[str[i]] = null;
    }
  }
  let firstUnique = Infinity;
  for (let key in isUnique) {
    if (typeof isUnique[key] === 'number') {
      firstUnique = Math.min(firstUnique, isUnique[key]);
    }
  }
  return firstUnique === Infinity ? -1 : firstUnique;
};

console.log(firstUniqueCharacter('abcdabcd'));
