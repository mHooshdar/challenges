/**
 * @param {TreeNode} root
 * @return {number}
 */
function bfs(root) {
  let result = [];
  let q = [root];
  while (q.length) {
    const node = q.shift();
    result.push(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return result;
}
