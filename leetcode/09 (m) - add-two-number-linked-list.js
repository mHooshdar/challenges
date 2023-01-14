/*
Level: medium
o(n) s(1) - medium

https://leetcode.com/problems/add-two-numbers/
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// o(n), s(1)
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let carry = 0;
  let currentL1 = l1;
  let currentL2 = l2;
  let selectedNode = null;
  let l1Length = 0;
  let l2Length = 0;
  while (currentL1 || currentL2) {
    selectedNode = currentL1 || currentL2;
    let sum = (currentL1?.val || 0) + (currentL2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    currentL1 && (currentL1.val = sum);
    currentL2 && (currentL2.val = sum);
    if (currentL1) {
      currentL1 = currentL1.next;
      l1Length++;
    }
    if (currentL2) {
      currentL2 = currentL2.next;
      l2Length++;
    }
  }
  if (carry) {
    const newNode = new ListNode(carry);
    selectedNode.next = newNode;
  }
  return l1Length >= l2Length ? l1 : l2;
}

// o(n), s(1)
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {ListNode} carry
 * @return {ListNode}
 */
function addTwoNumbersRecursive(l1, l2, carry = 0) {
  let currentL1 = l1?.val ?? 0;
  let currentL2 = l2?.val ?? 0;
  let sum = currentL1 + currentL2 + carry;

  if (l1 === null && l2 === null) {
    if (carry) {
      return new ListNode(sum, null);
    }
    return null;
  }
  carry = Math.floor(sum / 10);

  return new ListNode(
    sum % 10,
    addTwoNumbers(l1?.next ?? null, l2?.next ?? null, carry),
  );
}
