/*
This question is asked by Google. Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.

Ex: Given the following linked lists and values...

1->2->3->null, value = 3, return 1->2->null
8->1->1->4->12->null, value = 1, return 8->4->12->null
7->12->2->9->null, value = 7, return 12->2->9->null

OICE

Output: the resulting LL after removing the values
Input: a LL (the head node)
Constraints: n/a
Edge Cases: removing the head/tail receiving a node with one value


1
/// Single Node Check ///
if the next node is falsy
  if its value is equal to the target
    return node.next
  else return the input LL

declare a result that's equal to the head

while the value of the result is equal to the target and result is truthy
  result is equal to result.next

while result.next
  if result.next.val is equal to target
    result is equal to result.next.next

if the value of result is equal to the target
  return result.next

*/

