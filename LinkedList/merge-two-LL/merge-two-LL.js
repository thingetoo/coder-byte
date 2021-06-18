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
set the lower value's LL to the next
keep a reference to the head

iterate through the lists => while loop
  check for the smallest value
  create a new node for that value
  add it to the list

check which list still has values
  add that list to the end
return head

l1 = [1,2,4],
          ^
l2 = [1,3,4]
        ^
RESULT = 1 -> 2 -> 2 -> 4  -> 4

*/

var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return null;
  }
  if (!l2) {
    return null;
  }
  let smallerHead;
  let largerHead;
  if (l1.val < l2.val) {
    smallerHead = l1;
    largerHead = l2;
  } else {
    smallerHead = l2;
    largerHead = l1;
  }

  let merged = new ListNode(smallerHead.val);
  smallerHead = smallerHead.next;
  const head = merged;

  while (smallerHead && largerHead) {
    if (smallerHead.val < largerHead.val) {
      const newNode1 = new ListNode(smallerHead.val);
      merged.next = newNode;
      smallerHead = smallerHead.nextl;
    } else {
      const newNode2 = new ListNode(largerHead.val);
      merged.next = newNode2;
      largerHead = largerHead.next;
    }
  }
  if (smallerHead) {
    merged.next = smallerHead;
  } else {
    merged.next = largerHead;
  }
};
