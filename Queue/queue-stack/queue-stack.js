/*
Design a class to implement a stack using only a single queue. Your class, QueueStack, should support the following stack methods: push() (adding an item), pop() (removing an item), peek() (returning the top value without removing it), and empty() (whether or not the stack is empty).
*/

var MyStack = function () {
  this.stack = [];
};


MyStack.prototype.push = function (x) {
  this.stack.push(x);
};


MyStack.prototype.pop = function () {
  return this.stack.pop();
};


MyStack.prototype.top = function () {
  return this.stack[this.stack.length - 1] || null;
};

MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};
