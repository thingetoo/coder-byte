/*
This question is asked by Amazon. Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.
Ex: Given the following linked lists...

1->2->3->null, return 2

1->2->3->4->null, return 3
              ^
      ^
1->null, return 1

OICE
Output: a node => with its attachments
Input: a LL
Contraints: n/a
Edge Cases: if node only has length of 1 => return it

HL: have two pointer, one move fast and the other move slow

Pseudo:

1. declare a fast and slow pointer set equal to the head
2. while fast and fast.next are not null
      - iterate the slow by one step and the fast by two steps

3. return the slow pointer
*/