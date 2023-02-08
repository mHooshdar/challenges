/*
Knight Probability in Chessboard
Level: medium
Answer 0 : Recursive - o(8 ^ k) s(8 ^ k) - medium
Answer 1 : DP Top Down - o(n ^ 2 * k) s(n ^ 2 * k) - medium
Answer 2 : DP Bottom Up - o(n ^ 2 * k) s(n ^ 2 * k) - hard
Answer 3 : DP Bottom Up (optimized without keeping array) - o(n ^ 2 * k) s(n ^ 2) - hard

https://leetcode.com/problems/knight-probability-in-chessboard/
On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).
A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.
Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
The knight continues moving until it has made exactly k moves or has moved off the chessboard.
Return the probability that the knight remains on the board after it has stopped moving.

#medium
*/

// o(8 ^ k) s(8 ^ k)
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
function knightProbability(n, k, row, column) {
  if (row < 0 || row >= n || column < 0 || column >= n) {
    return 0;
  }
  if (k === 0) {
    return 1;
  }

  let res = 0;
  for (let i = 0; i < DIRECTIONS.length; i++) {
    const dir = DIRECTIONS[i];
    res += knightProbability(n, k - 1, row + dir[0], column + dir[1]);
  }
  return res / 8;
}

// o(n ^ 2 * k) s(n ^ 2 * k)
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
function knightProbabilityDPTopDown(n, k, row, column) {
  function recersive(n, k, row, column, dp) {
    if (row < 0 || row >= n || column < 0 || column >= n) {
      return 0;
    }
    if (k === 0) {
      return 1;
    }

    if (dp[k][row][column] !== undefined) {
      return dp[k][row][column];
    }

    let res = 0;
    for (let i = 0; i < DIRECTIONS.length; i++) {
      const dir = DIRECTIONS[i];
      res += recersive(n, k - 1, row + dir[0], column + dir[1], dp) / 8;
    }
    dp[k][row][column] = res;
    return dp[k][row][column];
  }

  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));

  return recersive(n, k, row, column, dp);
}

// o(n ^ 2 * k) s(n ^ 2 * k)
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
function knightProbabilityDPBottomUp(n, k, row, column) {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));

  dp[0][row][column] = 1;
  for (let step = 1; step <= k; step++) {
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        for (let d = 0; d < DIRECTIONS.length; d++) {
          const dir = DIRECTIONS[d];
          const prevRow = r + dir[0];
          const prevCol = c + dir[1];
          if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
            dp[step][r][c] += dp[step - 1][prevRow][prevCol] / 8;
          }
        }
      }
    }
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += dp[k][i][j];
    }
  }
  return res;
}

// o(n ^ 2 * k) s(n ^ 2)
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
function knightProbabilityDPBottomUpOptimized(n, k, row, column) {
  const prevDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const currDp = new Array(n).fill(0).map(() => new Array(n).fill(0));

  prevDp[row][column] = 1;
  for (let step = 1; step <= k; step++) {
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        for (let d = 0; d < DIRECTIONS.length; d++) {
          const dir = DIRECTIONS[d];
          const prevRow = r + dir[0];
          const prevCol = c + dir[1];
          if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
            currDp[r][c] += prevDp[prevRow][prevCol] / 8;
          }
        }
      }
    }
    prevDp = currDp;
    currDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += prevDp[i][j];
    }
  }
  return res;
}
