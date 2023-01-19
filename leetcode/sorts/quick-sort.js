/*
Quick Sort
Level: medium
brute force - o(n^2) - medium

https://leetcode.com/problems/sort-an-array/
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Overal Time Order: O(nLogn)
Worst case Time Order: O(n^2) - When The array is sorted
Space Orer: S(1)
Worst Case Space Orer: S(logn)
#medium
*/

function swap(nums, i, j) {
  let temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}

function quickSortHelper(nums, start, end) {
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

  quickSortHelper(nums, start, smaller - 1);
  quickSortHelper(nums, smaller + 1, end);
  return nums;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function quickSortArray(nums) {
  return quickSortHelper(nums, 0, nums.length - 1);
}

console.log(quickSortArray([5, 2, 3, 1]));
console.log(quickSortArray([5, 1, 1, 2, 0, 0]));
