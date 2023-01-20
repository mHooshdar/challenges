/*
Binary Search
Level: easy
o(logn) s(1) - easy

https://leetcode.com/problems/binary-search/
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

#easy
*/

// o(logn), s(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(nums, target, leftInput, rightInput) {
  let left = leftInput ?? 0;
  let right = rightInput ?? nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));
console.log(binarySearch([5], 5));
