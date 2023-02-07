/*
Knight Probability in Chessboard
Level: medium
Answer 1 : DP Top Down - o(?) s(?) - medium
Answer 2 : DP Bottom Up - o(?) s(?) - medium
Answer 3 : DP Bottom Up (optimized without keeping array) - o(?) s(?) - medium

https://leetcode.com/problems/knight-probability-in-chessboard/
On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).
A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.
Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
The knight continues moving until it has made exactly k moves or has moved off the chessboard.
Return the probability that the knight remains on the board after it has stopped moving.

#medium
*/

// o(?) s(?)
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
function knightProbability(n, k, row, column) {}
