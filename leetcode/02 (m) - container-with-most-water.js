/*
Level: medium
Answer 1: brute force - o(n^2) - medium
Answer 2: optmial - o(n) - medium

https://leetcode.com/problems/container-with-most-water/
You are given an integer array height of length n. There are n vertical lines drawn such that
the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
#medium
*/

// s(1), o(n^2)
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (i === j) continue;
      const y = Math.min(height[i], height[j]);
      const multiply = y * (j - i);
      max = Math.max(multiply, max);
    }
  }
  return max;
}

// s(n), o(n)
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea2(height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i !== j) {
    let x = j - i;
    const y = Math.min(height[i], height[j]);
    const multiply = y * x;
    max = Math.max(multiply, max);
    height[i] < height[j] ? i++ : j--;
  }
  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea2([1, 1]));
