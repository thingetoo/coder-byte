/*
This question is asked by Microsoft. Design a class, MovingAverage, which contains a method, next that is responsible for returning the moving average from a stream of integers.
Note: a moving average is the average of a subset of data at a given point in time.

Ex: Given the following series of events...

// i.e. the moving average has a capacity of 3.
MovingAverage movingAverage = new MovingAverage(3);
m.next(3) returns 3 because (3 / 1) = 3
m.next(5) returns 4 because (3 + 5) / 2 = 4
m.next(7) = returns 5 because (3 + 5 + 7) / 3 = 5
m.next(6) = returns 6 because (5 + 7 + 6) / 3 = 6

MovingAverage class definition:

public class MovingAverage {
    // TODO: declare any instance variables you require.
/**
 * Initializes a MovingAverage with a
 * capacity of `size`.
 */
/*
OICE

Output: an interface that keeps track of the moving average
Input: first input is the limit(how many numbers to keep an average of)
Constraints: n/a
Edge Cases: none

HL: make sure that our array is static => ensure it doesn't exceed a certain length


Contructor
declare an empty array (queue)
keep track of the input => size
declare a variable that keeps track of the total


Next method
if the length of the array is equal to the limit
  shift the first element out of the array => store it as a variable
  subtract the number from the total
add the new number to the total
push the new number to the end of the array
return the total divided by the array length
*/

var MovingAverage = function (size) {
  this.queue = [];
  this.size = size;
  this.total = 0;
};

MovingAverage.prototype.next = function (val) {
  const queueL = this.queue.length;
  if (queueL === size) {
    const toRemove = this.queue.shift();
    this.total -= toRemove;
  }
  this.total += val;
  this.queue.push(val);
  return this.total / queueL
};