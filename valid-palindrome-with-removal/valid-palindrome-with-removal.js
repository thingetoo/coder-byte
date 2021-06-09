/*
This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

Ex: Given the following strings...

"abcba", return true
"foobof", return true (remove the first 'o', the second 'o', or 'b')
"abccab", return false

OICE

Output: a boolean => represent whether is a palindrome with a removal
Input: a string
Contraints: logn
Edge Cases: empty string => true, type must be string

determine if the string is even or odd => this will determine our pointers
declare two pointers
if str is even
  set the two pointers to the mid points
else
  set the two pointers on the same mid point
declare a one time toggle equal to false

while pointer1 is greater than or equal to zero or pointer2 is less than or equal to the length of the string minus 1
  if values at each pointer are not the same
    if onetime toggle is true
      return false
    else
      set onetime toggle to true

return true
*/
