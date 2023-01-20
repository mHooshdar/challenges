/*
Find First and Last Position of Element in Sorted Array
Level: medium
o(logn) s(1) - medium

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

#medium
*/

function binarySearch(nums, target, leftInput,  rightInput) {
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

// o(logn), s(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchRange(nums, target) {
  let foundIndex = binarySearch(nums, target);
  let start = foundIndex;
  let end = foundIndex;

  while (true) {
    const leftBinaryIndex = binarySearch(nums, target, 0, start - 1);
    if (leftBinaryIndex === -1) {
      break;
    }
    start = leftBinaryIndex;
  }

  while (true) {
    const rightBinaryIndex = binarySearch(nums, target, end + 1, nums.length - 1);
    if (rightBinaryIndex === -1) {
      break;
    }
    end = rightBinaryIndex;
  }

  return [start, end];
}

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
