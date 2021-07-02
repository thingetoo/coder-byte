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