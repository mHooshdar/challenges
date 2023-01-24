/*
Validate Binary Search Tree
Level: medium
o(n), s(n) - medium

https://leetcode.com/problems/validate-binary-search-tree/
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

#medium
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function isInRange(node, lowerVal, upperVal) {
  if (node.val <= lowerVal || node.val >= upperVal) {
    return false
  }
  if (node.left) {
    if (!isInRange(node.left, lowerVal, node.val)) return false
  }
  if (node.right) {
    if (!isInRange(node.right, node.val, upperVal)) return false
  }
  return true
}

// o(n) s(n)
/**
 * @param {TreeNode} root
 * @return {number}
 */
function isValidBST (root) {
  if (!root) return true
  return isInRange(root, -Infinity, +Infinity)
};
