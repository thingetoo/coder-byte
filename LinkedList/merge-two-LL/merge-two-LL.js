/*
This question is asked by Apple. Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list

Ex: Given the following lists...

list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null

OICE:
Output: A LL that is sorted in ascending order
Input: Two LL
Constraints: each list is sorted
Edge Cases: If one list is null return the other

if one list is null
  return other one

check which linked list has the lower value => this will be the head
declare a variable of a new linked list with the lowest value => merged
keep a reference to the head

iterate through the lists => while loop
  check for the smallest value
  create a new node for that value
  add it to the list

check which list still has values
  add that list to the end
return head

l1 = [1,2,4], l2 = [1,3,4]


*/