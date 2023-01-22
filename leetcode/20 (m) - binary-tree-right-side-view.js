/*
Binary Tree Right Side View
Level: medium
Worst case: o(n), s(n) - medium

https://leetcode.com/problems/binary-tree-right-side-view/
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

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

// o(n), s(n), bfs approach  > order of space is the number of nodes in the last layer of the tree
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
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
    result.push(currentLevelValues[currentLevelValues.length - 1]);
  }
  return result;
}

function traverseTree(node, res, depth = 0) {
  if (res.length <= depth) res.push(node.val);
  if (node.right) traverseTree(node.right, res, depth + 1);
  if (node.left) traverseTree(node.left, res, depth + 1);
  return res;
}

// o(n), s(n), dfs approach => order of space is the height of the tree t
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView2(root) {
  return !root ? [] : traverseTree(root, []);
}
