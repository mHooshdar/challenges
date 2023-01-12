/*
Level: easy
o(n) s(n) - easy

https://leetcode.com/problems/valid-palindrome-ii/
Given a string s, return true if the `s` can be palindrome after deleting at most one character from it.
*/

function isSubPalnidrome(s, left, right) {
  while (left <= right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// s(n), o(n)
/**
 * @param {number[]} s
 * @return {boolean}
 */
function isAlmostPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return (
        isSubPalnidrome(s, left + 1, right) ||
        isSubPalnidrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
}

console.log(isAlmostPalindrome('A man, a plan, a canal: Panama'));
console.log(isAlmostPalindrome('race a car'));
console.log(isAlmostPalindrome(' '));
console.log(isAlmostPalindrome('abc'));
