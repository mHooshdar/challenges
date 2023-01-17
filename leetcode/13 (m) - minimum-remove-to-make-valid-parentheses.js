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

function removeString(s, i) {
  return s.substring(0, i) + s.substring(i + 1, s.length);
}

// o(n), s(n)
/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  let stack = [];
  let result = s;
  for (let i = 0; i < result.length; i++) {
    const char = result.charAt(i);
    if (char === '(') {
      stack.push(i);
    } else if (char === ')') {
      if (!stack.length) {
        result = removeString(result, i);
        i--;
      } else {
        stack.pop();
      }
    }
  }
  while (stack.length) {
    const i = stack.pop();
    result = removeString(result, i);
  }
  return result;
}

// o(n), s(n)
/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid2(s) {
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
    result = removeString(result, el.i);
  }
  return result;
}

console.log(minRemoveToMakeValid('a)b(c)d'));
console.log(minRemoveToMakeValid('lee(t(c)o)de)"'));

console.log(minRemoveToMakeValid2('a)b(c)d'));
console.log(minRemoveToMakeValid2('lee(t(c)o)de)"'));