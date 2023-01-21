/*
Maximum Depth of Binary Tree
Level: easy
Worst case: o(n), s(n) - easy

https://leetcode.com/problems/maximum-depth-of-binary-tree/
Given the `root` of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

#easy
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// o(n), s(n)
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) {
    return 0;
  }
  const depthLeft = maxDepth(root.left);
  const depthRight = maxDepth(root.right);
  return Math.max(depthLeft, depthRight) + 1;
}
