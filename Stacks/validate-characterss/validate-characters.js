/*
This question is asked by Google. Given a string only containing the following characters (, ), {, }, [, and ] return whether or not the opening and closing characters are in a valid order.

Ex: Given the following strings...

"(){}[]", return true
"(({[]}))", return true
"{(})", return false

[]

OICE
Output: a boolean determining whether the string is valid
Input: a string
Constraints: n/a
Edge Cases: empty string => true

HL: Use a data structure like a stack => which will operate in a LIFO

1. declare a stack to be used
2. we need an object that will contain the compliments of each character

3. loop over the string
  - if it is an opening bracket => is it a key in the compliment object
    add it to the stack
  - else
    if the stack has no length
      return false
    else
      pop off the stack
      if the popped value's compliment is not equal to current character value
        return false

  return if the object is empty
*/

var isValid = function (s) {
  const stack = [];
  const comps = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  for (let i = 0; i < s.length; i++) {}
};
