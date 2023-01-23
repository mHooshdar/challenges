/*
Count Complete Tree Nodes
Level: medium
Worst case: o(logn), s(1) - medium

https://leetcode.com/problems/count-complete-tree-nodes/
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.

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

function countHeight(node) {
  let height = 0;
  while (node.left) {
    height++;
    node = node.left;
  }
  return height;
}

function nodeExist(indexToFind, height, node) {
  let left = 0;
  let right = Math.pow(2, height) - 1;
  let count = 0;
  while (count < height) {
    let midOfNode = Math.ceil((left + right) / 2);
    if (indexToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    count++;
  }
  return node !== null;
}

// o(logn) s(1)
/**
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes (root) {
  if (!root) return 0;
  let height = countHeight(root);
  if (height === 0) return 1;
  const upperCount = Math.pow(2, height) - 1;
  let left = 0;
  let right = upperCount;
  while (left < right) {
    let indexToFind = Math.ceil((left + right) / 2);
    if (nodeExist(indexToFind, height, root)) {
      left = indexToFind;
    } else {
      right = indexToFind - 1;
    }
  }
  return upperCount + left + 1;
};
