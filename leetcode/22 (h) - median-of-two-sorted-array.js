/*
Count Complete Tree Nodes
Level: hard
o(log(m + n)), s(m + n) - hard

https://leetcode.com/problems/median-of-two-sorted-arrays/
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

#hard
*/

// o(log(m + n)), s(m + n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const combined = nums1.concat(nums2).sort((a, b) => a - b);
  const midIndex = Math.floor(combined.length / 2);

  return combined.length % 2 === 0
    ? (combined[midIndex] + combined[midIndex - 1]) / 2
    : combined[midIndex];
}
