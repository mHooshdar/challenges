/*
Number Of Islands
Level: medium
o(n) s(n) - medium

https://leetcode.com/problems/number-of-islands/
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

#medium
*/

// o(m * n) s(m * n) - bfs
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslandsBFS(grid) {
  if (grid.length === 0) return 0;
  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        islandCount++;
        grid[row][col] = 0;
        const queue = [];
        queue.push([row, col]);

        while (queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];

          for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];

            if (
              nextRow < 0 ||
              nextRow >= grid.length ||
              nextCol < 0 ||
              nextCol >= grid[0].length
            )
              continue;

            if (grid[nextRow][nextCol] === '1') {
              queue.push([nextRow, nextCol]);
              grid[nextRow][nextCol] = 0;
            }
          }
        }
      }
    }
  }

  return islandCount;
}

function dfs(grid, currentRow, currentCol) {
  if (
    currentRow < 0 ||
    currentRow >= grid.length ||
    currentCol < 0 ||
    currentCol >= grid[0].length
  )
    return;

  if (grid[currentRow][currentCol] === '1') {
    grid[currentRow][currentCol] = 0;

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const row = currentDir[0];
      const col = currentDir[1];
      dfs(grid, currentRow + row, currentCol + col);
    }
  }
}

// o(m * n) s(m * n) - dfs
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslandsDFS(grid) {
  if (!grid.length) return 0;

  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        islandCount++;
        dfs(grid, row, col);
      }
    }
  }

  return islandCount;
}
