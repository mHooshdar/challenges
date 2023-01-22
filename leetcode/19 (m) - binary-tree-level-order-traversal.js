/*
Binary Tree Level Order Traversal
Level: medium
Worst case: o(n), s(n) - medium

https://leetcode.com/problems/binary-tree-level-order-traversal/
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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

// o(n), s(n)
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  let result = [];
  if (!root) return result;
  const q = [root];
  while (q.length) {
    const length = q.length;
    let count = 0;
    const currentLevelValues = [];
    while (count < length) {
      const node = q.shift();
      currentLevelValues.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      count++;
    }
    result.push(currentLevelValues);
  }
  return result;
}
