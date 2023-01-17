/*
Minimum Remove to Make Valid Parentheses
Level: medium
o(n) s(n) - medium

https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
#medium
*/

// o(n), s(n)
/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  let stack = [];
  let result = s;
  for (let i = 0; i < s.length; i++) {
    const head = stack[stack.length - 1];
    const char = s.charAt(i);
    if (char === '(') {
      stack.push({ char, i });
    } else if (char === ')') {
      head?.char === '(' ? stack.pop() : stack.push({ char, i });
    }
  }
  while (stack.length) {
    const el = stack.pop();
    result =
      result.substring(0, el.i) + result.substring(el.i + 1, result.length);
  }
  return result;
}
