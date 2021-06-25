/*
This question is asked by Amazon. Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.

s = "ABC#", t = "CD##AB", return true
s = "como#pur#ter", t = "computer", return true
s = "cof#dim#ng", t = "code", return false


HL: create two stacks that will contain the current letters and pop letters off the stack when we encounter a backspace
  - at the end compare the two stacks => join and compare equality

declare two stacks - one for each string

loop over both strings => (x2)
  - if its a letter
    - we add it to the stack
  - else (a backspace)
    - then we pop it off the stack

convert both of the arrays to strings
- join on empty string (x2)
coompare the two strings for equality
*/
