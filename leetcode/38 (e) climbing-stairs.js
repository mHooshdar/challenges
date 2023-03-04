/*
Climbing Stairs
Level: easy
Answer 1 : DP Top Down - o(n) s(n) - easy
Answer 2 : DP Bottom Up - o(n) s(n) - easy
Answer 3 : DP Bottom Up (optimized without keeping array) - o(n) s(1) - easy

https://leetcode.com/problems/climbing-stairs/
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

#easy
*/

function climbStairsTopDownFn(n, dp) {
  if (n <= 2) return n;
  if (dp[n] !== undefined) return dp[n];
  dp[n] = climbStairsTopDownFn(n - 1, dp) + climbStairsTopDownFn(n - 2, dp);
  return dp[n];
}

// o(n) s(n)
/**
 * @param {number} n
 * @return {number}
 */
function climbStairsTopDown(n) {
  const dp = [];
  return climbStairsTopDownFn(n, dp);
}

// o(n) s(n)
/**
 * @param {number[]} n
 * @return {number}
 */
function climbStairsBottomUp(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[n];
}

// o(n) s(1)
/**
 * @param {number[]} n
 * @return {number}
 */
function climbStairsBottomUp2(n) {
  if (n <= 2) return n;
  let dpOne = 1;
  let dpTwo = 2;
  for (let i = 4; i <= n; i++) {
    const current = dpOne + dpTwo;
    dpOne = dpTwo;
    dpTwo = current;
  }
  return dpOne + dpTwo;
}
