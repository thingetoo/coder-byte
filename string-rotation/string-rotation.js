/*
Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, wrote code to check if s2 is a rotation of s1 using only one call to isSubstring

test:
s1= "waterbottle"
s2= "erbottlewat"

OICE

Output: a boolean representing if one str is a rotation of another
Input: two strings
Constraints: One call to isSubstring
Edge Cases: n/a

we have a function is substring which checks if one word is a substring of another
  - can only call this once

PSEUDO

declare an object that will hold all the values and the count of those values in str1

loop through string 1 and store the number of letter occurences

loop through string 2 and subtract those occurences
  if we hava value that equals 0 then delete it

we check the length of the object keys

if (str1.length !== str2.length) {
  return false
}

const occ = {};

for (let i = 0; i < str1.length; i++) {
  if (!occ[str1[i]]) {
    occ[str1[i]] = 1;
  } else {
    occ[str1[i]]++;
  }
}

for (let i = 0; i < str2.length) {
  if (!occ[str2[i]]) {
    return false
  }
  if (occ[str2[i]]) {
    occ[str2[i]]--;
    if (occ[str2[i]] === 0) {
      delete occ[str2[i]]
    }
  }
}

return Object.keys(occ) === 0;


PSEUDO

get the length of the first string

check if the length of the first string length equals the second string length and the first string length is greater than zero
  concat the second(rotated) string to itself
  use the isSubstring method to check if the first string is a substring of the second string => will return a boolean

str1 and str2

const resultLength = str1.length;

if (resultLength === str2.length && result.length > 0) {
  const catted = str2 + str2
  return isSubstring(catted, string1)
}



*/