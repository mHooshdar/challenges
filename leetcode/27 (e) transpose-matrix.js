/*
Transpose Matrix
Level: easy
o(n*2) s(1) - easy

https://leetcode.com/problems/transpose-matrix/description/
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

#easy
*/

// o(n*2) s(1)
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
  if (!matrix.length) return [];
  return matrix[0].map((_, i) => matrix.map((b) => b[i]));
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);