/*
Sudoku Solver
Level: hard
Answer : Backtracking - o(9! * n) s(81 => 1) - hard

https://leetcode.com/problems/sudoku-solver/
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

#hard
*/

function getBoxId(row, col) {
  const colVal = Math.floor(col / 3);
  const rowVal = Math.floor(row / 3) * 3;
  return colVal + rowVal;
}

function isValid(box, row, col, num) {
  return !row[num] && !box[num] && !col[num];
}

function solveBackTrack(board, boxes, rows, cols, r, c) {
  const n = board.length;
  if (r === board.length || c === board[0].length) {
    return true;
  }
  if (board[r][c] === '.') {
    for (let num = 1; num <= n; num++) {
      const numVal = num.toString();
      board[r][c] = numVal;
      const boxId = getBoxId(r, c);
      const box = boxes[boxId];
      const row = rows[r];
      const col = cols[c];
      if (isValid(box, row, col, numVal)) {
        box[numVal] = true;
        col[numVal] = true;
        row[numVal] = true;
        if (c === board[0].length - 1) {
          if (solveBackTrack(board, boxes, rows, cols, r + 1, 0)) {
            return true;
          }
        } else {
          if (solveBackTrack(board, boxes, rows, cols, r, c + 1)) {
            return true;
          }
        }
        delete box[numVal];
        delete row[numVal];
        delete col[numVal];
      }
      board[r][c] = '.';
    }
  } else {
    if (c === board[0].length - 1) {
      if (solveBackTrack(board, boxes, rows, cols, r + 1, 0)) {
        return true;
      }
    } else {
      if (solveBackTrack(board, boxes, rows, cols, r, c + 1)) {
        return true;
      }
    }
  }
}

// o(9! * 9) s(91 => 1)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  const n = board.length;
  const rows = new Array(n);
  const cols = new Array(n);
  const boxes = new Array(n);
  for (let i = 0; i < n; i++) {
    rows[i] = {};
    cols[i] = {};
    boxes[i] = {};
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== '.') {
        const val = board[r][c];
        const boxId = getBoxId(r, c);
        boxes[boxId][val] = true;
        rows[r][val] = true;
        cols[c][val] = true;
      }
    }
  }
  solveBackTrack(board, boxes, rows, cols, 0, 0);
}
