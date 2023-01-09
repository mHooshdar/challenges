/*
https://leetcode.com/problems/backspace-string-compare/
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

level: easy
answer 1: o(n) s(n) - easy
answer 2: o(n) s(1) - easy
*/

// o(n), s(n)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  function removeHash(s) {
    let i = 0
    let s1 = s
    while(i < s1.length) {
      if (s1.charAt(i) === '#') {
        s1 = s1.slice(0, i === 0 ? i : i - 1) + s1.slice(i + 1)
        if(i !== 0) {
          i--
        } 
        continue
      }
      i++
    }
    return s1
  }
  return removeHash(s) === removeHash(t)
}

console.log(backspaceCompare('a##c', '#a#c'))
console.log(backspaceCompare('ab#c', 'ad#c'))
