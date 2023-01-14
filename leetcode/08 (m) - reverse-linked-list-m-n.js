/*
Level: medium
o(n) s(1) - medium

https://leetcode.com/problems/reverse-linked-list-ii/
Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from
position `left` to position `right`, and return the reversed list.
*/

// o(n), s(1)
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  let i = 1;
  let current = head;
  let start = head;
  while (i < left) {
    start = current;
    current = current.next;
    i++;
  }

  let tail = current;
  let newList = null;

  while (i <= right) {
    const next = current.next;
    current.next = newList;
    newList = current;
    current = next;
    i++;
  }
  start.next = newList;
  tail.next = current;

  return left > 1 ? head : newList;
}
