/*
This question is asked by Apple. Given a potentially cyclical linked list where each value is unique, return the node at which the cycle starts. If the list does not contain a cycle, return null.

Ex: Given the following linked lists...

1->2->3, return null
1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
1->9->3->7->7 (7 points to itself), return a reference to the node containing 7

OICE:
Output: A reference to the node where the cycle occurs
Input: a LL
Constraints: n/a
Edge Cases: a node pointing to itself

PSEUDO

1. declare an object to keep track of the nodes that we've seen so far
2. iterate over the linked list
  - store the vales in the hash table
  - the first time we come over the same value
    return that value

3. return head

*/

var detectCycle = function(head) {
    const seen = {};

    while (head) {
      if (seen[head]) {
        return head
      } else {
        seen[head] = true;
      }
      head = head.next;
    }

    return head;
};