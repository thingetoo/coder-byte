/*
This question is asked by Google. Create a class CallCounter that tracks the number of calls a client has made within the last 3 seconds. Your class should contain one method, ping(int t) that receives the current timestamp (in milliseconds) of a new call being made and returns the number of calls made within the last 3 seconds.
Note: you may assume that the time associated with each subsequent call to ping is strictly increasing.

Ex: Given the following calls to ping…

ping(1), return 1 (1 call within the last 3 seconds)
ping(300), return 2 (2 calls within the last 3 seconds)
ping(3000), return 3 (3 calls within the last 3 seconds)
ping(3002), return 3 (3 calls within the last 3 seconds)
ping(7000), return 1 (1 call within the last 3 seconds)

OICE
Designing a class => so the format is a little different here


TEST
[1, 300, 3000]

HL: we keep track of the number of values with a queue => we push the value on and compare the current time to the oldest time
    and we will shift if the difference is greater than 3000

Constructor
1. declare a variable the will be our queue (array)


Ping method(time(ms))
1. while loop over the array => as long as the difference between the time and the first value is less than 3000
  - shift the first element out of the array
2. push the new element into the array
3. return the length




*/

var RecentCounter = function () {
  this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
  let first = this.queue[0];
  console.log(first, t - first);
  while (first && t - first > 3000) {
    this.queue.shift();
    first = this.queue[0];
  }
  this.queue.push(t);
  return this.queue.length;
};

const myCounter = new RecentCounter();

console.log(myCounter.ping(1));
console.log(myCounter.ping(1000));
console.log(myCounter.ping(3000));
console.log(myCounter.ping(3001));
