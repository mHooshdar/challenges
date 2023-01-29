/*
Rotting Oranges
Level: medium
o(m * n) s(m * n) - medium

https://leetcode.com/problems/rotting-oranges/
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

#medium
*/

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

// o(m * n) s(m * n)
/**
 * @param {character[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  if (!grid.length) return -1;
  let minutes = 0;
  let qLength = 0;
  let freshItems = 0;
  let q = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === ROTTEN) {
        q.push([row, col]);
      } else if (grid[row][col] === FRESH) {
        freshItems++;
      }
    }
  }
  qLength = q.length;

  while (q.length) {
    if (!qLength) {
      qLength = q.length;
      minutes++;
    }
    const currentOrange = q.shift();
    qLength--;
    const row = currentOrange[0];
    const col = currentOrange[1];

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextRow = row + currentDir[0];
      const nextCol = col + currentDir[1];

      if (
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextCol < 0 ||
        nextCol >= grid[0].length
      ) {
        continue;
      }

      if (grid[nextRow][nextCol] === FRESH) {
        grid[nextRow][nextCol] = ROTTEN;
        freshItems--;
        q.push([nextRow, nextCol]);
      }
    }
  }

  if (freshItems !== 0) {
    return -1;
  }

  return minutes;
}
