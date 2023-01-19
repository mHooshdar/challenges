/*
Implement Kth Longest Element In An Array
Level: medium
o(nlogn) s(nlogn) - medium

https://leetcode.com/problems/kth-largest-element-in-an-array/description/
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity.

#medium
*/

function swap(nums, i, j) {
  let temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}

function quickSortArray(nums, start, end) {
  if (start >= end) return nums;

  let pivotValue = nums[start];
  let smaller = start;
  for (let i = start + 1; i <= end; i++) {
    let bigger = i;
    if (nums[bigger] < pivotValue) {
      smaller++;
      swap(nums, smaller, bigger);
    }
  }
  swap(nums, start, smaller);

  quickSortArray(nums, start, smaller - 1);
  quickSortArray(nums, smaller + 1, end);
  return nums;
}

// o(nlogn), s(nlogn)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const sortedArray = quickSortArray(nums, 0, nums.length - 1);
  return sortedArray[sortedArray.length - k];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4]), 2);
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
