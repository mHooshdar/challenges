/*
Level: easy
Answer 1: brute force - o(n) s(n) - easy
Answer 2: optimal - o(n) s(1) - medium

https://leetcode.com/problems/backspace-string-compare/
Given two strings s and t, return true if they are equal when both are typed into empty text editors.
'#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
*/

// o(n), s(n)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  function removeHash(s) {
    let i = 0;
    let s1 = s;
    while (i < s1.length) {
      if (s1.charAt(i) === '#') {
        s1 = s1.slice(0, i === 0 ? i : i - 1) + s1.slice(i + 1);
        if (i !== 0) {
          i--;
        }
        continue;
      }
      i++;
    }
    return s1;
  }
  return removeHash(s) === removeHash(t);
}

// o(n), s(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare2(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  while (i >= 0 || j >= 0) {
    if (s.charAt(i) === '#') {
      let backCount = 2;
      while (backCount) {
        i--;
        backCount--;
        if (s.charAt(i) === '#') {
          backCount += 2;
        }
      }
    }
    if (t.charAt(j) === '#') {
      let backCount = 2;
      while (backCount) {
        j--;
        backCount--;
        if (t.charAt(j) === '#') {
          backCount += 2;
        }
      }
    }
    if (s.charAt(i) === t.charAt(j)) {
      i--;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(backspaceCompare('a##c', '#a#c'))
console.log(backspaceCompare('ab#c', 'ad#c'))

console.log(backspaceCompare2('a##c', '#a#c'));
console.log(backspaceCompare2('ab#c', 'ad#c'));
