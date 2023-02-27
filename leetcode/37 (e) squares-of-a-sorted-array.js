/*
Squares of a Sorted Array
Level: easy
Answer 1: Bruth force: o(nlogn) s(n) - easy
Answer 2: Two pointer: o(n) s(1) - easy

https://leetcode.com/problems/squares-of-a-sorted-array/
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

#easy
*/

// o(nlogn) s(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  let res = [...nums];
  return res.map((item) => item * item).sort((a, b) => a - b);
}

// o(n) s(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares2(nums) {
  let start = 0;
  let end = nums.length - 1;
  let res = Array(nums.length).fill(0);
  for (let i = res.length - 1; i >= 0; i--) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      value = nums[start] * nums[start];
      start++;
    } else {
      value = nums[end] * nums[end];
      end--;
    }
    res[i] = value;
  }
  return res;
}
