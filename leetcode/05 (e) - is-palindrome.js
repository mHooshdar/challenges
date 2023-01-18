/*
Is Palindrome
Level: easy
o(n) s(n) - easy

https://leetcode.com/problems/valid-palindrome/description/
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
#easy
*/

// s(n), o(n)
/**
 * @param {number[]} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const trimedString = s.toLowerCase().replace(/[^a-z0-9]*/gm, '');
  return trimedString.split('').reverse().join('') === trimedString;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
