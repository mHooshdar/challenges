/*
Level: easy
o(n) s(1) - easy

https://leetcode.com/problems/reverse-linked-list/description/
Given the `head` of a singly linked list, reverse the list, and return the reversed list.
*/

// o(n), s(1)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
