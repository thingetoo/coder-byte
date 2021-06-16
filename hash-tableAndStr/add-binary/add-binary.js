/*
This question is asked by Apple.

Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
Note: neither binary string will contain leading 0s unless the string itself is 0

*/

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"

/*
OICE

Output: A string representing the sum of two strings in binary
Input: Two binary strings
Constraints: N/A
Edge Cases: If one string is equal to 0 then return the other string

8	4	2	1

how to convert to number:

find the length of each string
to find the power to begin with, take 2^length - 1
iterate over each string adding the sum to a results variable

convert number to binary: Number(result).toString(2)

*/

const addBinary = function (str1, str2) {
  if (str1 === '0' || str1 === '') {
    return str2;
  }
  if (str2 === '0' || str2 === '') {
    return str1;
  }
  let result = 0;
  let len1 = str1.length;
  let len2 = str2.length;
  // 4, 2, 1
  // 111
  let startPow1 = Math.pow(2, len1 - 1);
  let startPow2 = Math.pow(2, len2 - 1);

  for (let i = 0; i < str1.length; i++) {
    const num = Number(str1[i]);
    result += startPow1 * num;
    startPow1 /= 2;
  }

  for (let i = 0; i < str2.length; i++) {
    const num = Number(str2[i]);
    result += startPow2 * num;
    startPow2 /= 2;
  }
  return Number(result).toString(2);
};

// console.log(addBinary('11', '1'));

const res = parseInt('100', 2) + parseInt('1', 2);
console.log(Number(res).toString(2));
