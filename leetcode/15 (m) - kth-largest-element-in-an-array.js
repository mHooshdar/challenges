/*
Implement Kth Longest Element In An Array
Level: medium
Answer 1: Quick Sort: o(nlogn) s(logn) - medium
Answer 2: Hoare's Quick Select: o(n) o(n^2) s(1) - medium

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

function getPartition(nums, left, right) {
  let i = left;

  for (let j = left; j <= right; j++) {
    if (nums[j] <= nums[right]) {
      swap(nums, i, j);
      i++;
    }
  }
  return i - 1;
}

function quickSelect(nums, left, right, indexToFind) {
  const partitionIndex = getPartition(nums, left, right);

  if (partitionIndex === indexToFind) {
    return nums[partitionIndex];
  } else if (indexToFind < partitionIndex) {
    return quickSelect(nums, left, partitionIndex - 1, indexToFind);
  } else {
    return quickSelect(nums, partitionIndex + 1, right, indexToFind);
  }
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

// best/average o(n), worst o(n^2), s(nlogn)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest2(nums, k) {
  const indexToFind = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, indexToFind);
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

console.log(findKthLargest2([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
