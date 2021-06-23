/*
This question is asked by Facebook. Given a linked list, containing unique values, reverse it, and return the result.

Ex: Given the following linked lists...

1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null
7->15->9->2->null, return a reference to the node that contains 2 which points to a list that looks like the following: 2->9->15->7->null
1->null, return a reference to the node that contains 1 which points to a list that looks like the following: 1->null

OICE
Output: a reversed LL
Input: a LL
Constraints: n/a
Edge Cases: if null or node.next is null, return the input

7->15->9->2->null
   ^


prev = 7->null
next = 15->9->2->null

prev = 15->7->null
next= 9->2->null

prev= 9->15->7->null
next = 2->null

prev = 2->9->15->7->null
next = null


2->9->15->7->null
1. we want to get a reference of the next val => rest of the LL
2. if its the head, we want to set the head val to null
3. loop through the linked list while current is not null
  - set next equal to the current.next
  - set the current.next equal to the prev
  - set the prev equal to the current
  - the current equal to the next

*/

var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let current = head;
  let prev = current;
  prev.next = null;
  current = current.next;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
