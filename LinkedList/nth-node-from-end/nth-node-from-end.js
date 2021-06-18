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

[1, 2, 3, 4, 5]  ,  n = 1
             ^
          ^
=> two pointers and a while loop
  - we want the distance between the pointers to be n
  - so we do a countdown until n is equal to zero
    - then we move both pointers together
  - when we reach the end set the lagging pointer to next.next

PSEUDO
1. if head's next value is null then return head.next
2. declare a boolean to keep track of whether the first pointer has been moved
3. don't alter the head => will use this as the value to return; => note to reset it if we remove the head
4. declare pointer 1 and pointer 2
5. while loop where we get the distance n between the two pointers => condition is while pointer 2 is not null
- when n = 0 we can move
  - flip the boolean to true to declare that we have moved
6. if the boolean hasn't be flipped
  - return head.next
   else set pointer 1 equal to pointer 1.next.next
*/

var removeNthFromEnd = function (head, n) {
  if (!head.next) {
    return head.next;
  }
  let firstPointerMoved = false;
  let p1 = head;
  let p2 = head;
  while (p2) {
    if (n > 0) {
      p2 = p2.next;
      n--;
    } else {
      firstPointerMoved = true;
      p1 = p1.next;
      p2 = p2.next;
    }
  }
  if (!firstPointerMoved) {
    return head.next;
  } else {
    p1 = p1.next.next;
  }
  return head;
};
