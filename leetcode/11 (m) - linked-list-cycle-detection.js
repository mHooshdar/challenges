/*
Linked List Cycle Detection
Level: medium
Answer 1: o(n) s(n) - medium
Answer 2: o(n) s(1) - medium -> named: Floyd's tortoise and hare algorithm

https://leetcode.com/problems/linked-list-cycle-ii/
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed).
It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
#medium
*/

// o(n), s(n)
/**
 * @param {Node} head
 * @return {Node}
 */
function detectCycle(head) {
  let seenNodes = new Set();
  let current = head;
  while (current) {
    if (seenNodes.has(current)) {
      return current;
    }
    seenNodes.add(current);
    current = current.next;
  }
  return current;
}

// o(n), s(1)
// Floyd's tortoise and hare algorithm
/**
 * @param {Node} head
 * @return {Node}
 */
function detectCycl2(head) {
  let tortoise = head;
  let hare = head;
  if (!head || !head.next) {
    return null;
  }
  while (true) {
    // 1 jump
    tortoise = tortoise.next;
    // 2 jump
    hare = hare.next;
    if (hare === null || hare.next === null) {
      return null;
    } else {
      hare = hare.next;
    }
    if (tortoise === hare) {
      break;
    }
  }
  let cycleNode = head;
  while (cycleNode !== tortoise) {
    cycleNode = cycleNode.next;
    tortoise = tortoise.next;
  }
  return cycleNode;
}
