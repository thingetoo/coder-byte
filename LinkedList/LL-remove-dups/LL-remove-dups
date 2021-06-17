/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
OICE
Output: LL after deletions
Input: A LL
Constraints: n/a
Edge Cases: when every value has a duplicate => set head to null and return

PSEUDO
1. if head is null or head.next is equal to null return head
  - we would have no duplicates cause there would only be 0 or 1 value
2. get a reference to the head
3. declare a hash table to keep track of duplicates
4. iterate through the LL and find the duplicates
5. iterate through the LL
  if we go over a duplicate remove it => prev to next but if next === null then we set prev = null
6. return the head

[2,1,1,2]
2 -> 1 -> 1 -> 2

var deleteDuplicatesUnsorted = function(head) {
  if (!head || head.next === null) {
    return head
  }
  const result = head;
  const second = head;
  const occur = {}

  while (head) {
    if (!occur[head.val]) {
      occur[head.val] = 1
    } else {
      occur[head.val]++
    }
    head = head.next
  }

  if (occur[second.val] > 1) {
    result.next = result
  }
  while(second.next) {
    const current = second
    const next = second.next
    if (occur[next.val] > 1) {
      current = next.next
    }
  }
  if (occur[second.val] > 1 && !second.next) {
    result = null
  }
};