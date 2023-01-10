/*
https://leetcode.com/problems/two-sum/
Given an array of integers, return the indices of the two numbers that
added up to a given target

level: easy
answer 1: brute force - o(n^2) - easy
answer 2: o(n) - easy
*/

// s(1), o(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return null;
}

// s(n), o(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum2(nums, target) {
  let expected = {};
  for (let i = 0; i < nums.length; i++) {
    if (expected[nums[i]] !== undefined) {
      return [expected[nums[i]], i];
    }
    expected[target - nums[i]] = i;
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));
