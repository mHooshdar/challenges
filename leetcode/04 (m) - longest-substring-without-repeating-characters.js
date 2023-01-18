/*
Longest Substring Without Repeating Characters
Level: medium
Answer 1: brute force - o(n^2) s(n) - medium
Answer 2: optimal - o(n) s(n) - medium

https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string `s`, find the length of the longest substring without repeating characters.

‍‍‍`A substring is a contiguous non-empty sequence of characters within a string.`
#medium
*/

// o(n), s(n)
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let seen = new Map();
  let p1 = 0;
  let p2 = 0;
  let max = 0;

  while (p2 < s.length) {
    if (p1 <= seen.get(s.charAt(p2))) {
      p1 = seen.get(s.charAt(p2)) + 1;
    }
    seen.set(s.charAt(p2), p2);
    max = Math.max(max, p2 - p1 + 1);
    p2++;
  }
  return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('bbbbbb'));
console.log(lengthOfLongestSubstring('tmmzuxt'));
