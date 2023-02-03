/*
Min Cost Climbing Stairs
Level: easy
Answer 1 : DP Top Down - o(n) s(n) - easy
Answer 2 : DP Bottom Up - o(n) s(n) - easy
Answer 3 : DP Bottom Up (optimized without keeping array) - o(n) s(1) - easy

https://leetcode.com/problems/min-cost-climbing-stairs/
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

#easy
*/

function minCostTopDown(i, cost, dp) {
  if (i === 0) return cost[0];
  if (i === 1) return cost[1];
  if (dp[i] !== undefined) return dp[i];
  dp[i] =
    cost[i] +
    Math.min(minCostTopDown(i - 1, cost, dp), minCostTopDown(i - 2, cost, dp));
  return dp[i];
}
// o(n) s(n)
/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairsTopDown(cost) {
  const n = cost.length;
  const dp = [];
  return Math.min(
    minCostTopDown(n - 1, cost, dp),
    minCostTopDown(n - 2, cost, dp),
  );
}

// o(n) s(n)
/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairsBottomUp(cost) {
  const n = cost.length;
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < n; i++) {
    dp.push((cost[i] || 0) + Math.min(dp[i - 1], dp[i - 2]));
  }
  return Math.min(dp[n - 1], dp[n - 2]);
}

// o(n) s(1)
/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairsBottomUp2(cost) {
  const n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[1];
  let dpOne = cost[0];
  let dpTwo = cost[1];
  for (let i = 2; i < n; i++) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }
  return Math.min(dpOne, dpTwo);
}
