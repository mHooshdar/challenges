/*
Level: medium
o(n) s(1) - medium

https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer.
This child pointer may or may not point to a separate doubly linked list, also containing these special nodes.
These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the `head` of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list.
Let `curr` be a node with a child list. The nodes in the child list should appear after `curr` and before `curr.next` in the flattened list.

Return the `head` of the flattened list. The nodes in the list must have all of their child pointers set to `null`.
*/

// o(n), s(1)
/**
 * @param {Node} head
 * @return {Node}
 */
function flatten(head) {
  if (!head) return head;
  let current = head;
  while (current) {
    if (!current.child) {
      current = current.next;
    } else {
      let tail = current.child;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = current.next;
      if (tail.next) {
        tail.next.prev = tail;
      }
      current.next = current.child;
      current.next.prev = current;
      current.child = null;
    }
  }
  return head;
}
