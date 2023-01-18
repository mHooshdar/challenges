/*
Implement Queue With Stack
Level: easy
o(n) s(n) - easy

https://leetcode.com/problems/implement-queue-using-stacks/
Implement a first in first out (FIFO) queue using only two stacks.
The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

#easy
*/

function MyQueue() {
  this.in = [];
  this.out = [];
  this.front = null
}

// o(1)
/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (!this.in.length) {
    this.front = x;
  }
  this.in.push(x)
};

// o(n)
/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.out.length) {
    while (this.in.length) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
};

// o(n)
/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.out.length) {
    while (this.in.length) {
      this.out.push(this.in.pop());
    }
  }
  return this.out[this.out.length - 1];

  // other solution o(1)
  // return return this.out.length ? this.out[this.out.length - 1] : this.front
};

// o(1)
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.out.length && !this.in.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
