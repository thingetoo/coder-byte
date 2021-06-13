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



*/