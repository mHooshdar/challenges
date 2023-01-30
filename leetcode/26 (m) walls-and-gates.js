/*
Walls and Gates
Level: medium
o(m * n) s(m * n) - medium

https://leetcode.com/problems/walls-and-gates/
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

#medium
*/

const INF = Infinity;
const WALLS = -1;
const GATE = 0;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];


function dfs(grid, row, col, count) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    count > grid[row][col]
  )
    return;
  grid[row][col] = count;
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
}

// o(m * n) s(m * n)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
function wallsAndGates(matrix) {
  if (!matrix.length) return -1;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === GATE) {
        dfs(matrix, row, col, 0);
      }
    }
  }

  return matrix;
}

wallsAndGates(testMatrix);

console.log(testMatrix);
