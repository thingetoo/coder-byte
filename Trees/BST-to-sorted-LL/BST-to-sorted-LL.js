/*
Given a binary search tree, rearrange the tree such that it forms a linked list where all its values are in ascending order.

OICE
Output: a linked list (a reference to the head)
Input: a BST (ordered)
Constraints: n/a
Edge Cases: account for a null input or empty tree, heavily weighted tree to one side

PSEUDO

1. create a new LL
2. perform an inorder traversal to reach all the nodes and add them to the LL
3. returning the LL
*/

const bstToLL = function (tree) {
  let result = { val: -1, next: null }
  let start = result;
  const storedVals = []
  const inner = function (list, head) {
    head.left && inner(list, head.left);
    storedVals.push(head.val)
    // console.log(storedVals)
    head.right && inner(list, head.right);
  }
  inner(result, tree)
  console.log(storedVals)
  for (let i = 0; i < storedVals.length; i++) {
    start.next = { val: storedVals[i], next: null };
    start = start.next
  }
  return result.next
}

// const inOrder = function (tree) {
//   tree.left && inOrder(tree.left);
//   console.log(tree.val);
//   tree.right && inOrder(tree.right);
// }

class LinkedList {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const test = {
  val: 5,
  left: {
    val: 4,
  }, right: {
    val: 6
  }
}

console.log(bstToLL(test))