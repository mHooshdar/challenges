/*
Level: easy
o(n) s(n) - easy

https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
#easy
*/

// o(n), s(n)
/**
 * @param {string} s
 * @return {boolean}
 */
function isValidParantheses(s) {
  let stack = [];
  const start = { '(': ')', '{': '}', '[': ']' };
  const end = [')', '}', ']'];
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (start[char]) {
      stack.push(char);
    } else if (end.includes(char)) {
      const rightBracket = stack.pop();
      if (start[rightBracket] !== char) {
        return false;
      }
    }
  }
  return !stack.length;
}
