/*
This question is asked by Facebook.

Given a linked list and a value n, remove the nth to last node and return the resulting list.

TEST:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

OICE
Output: return a LL with the value removed
Input: a LL and a number
Constraints: n is always in range
Edge Cases: removing from the start => setting a new head, having one value => return head.next
*/