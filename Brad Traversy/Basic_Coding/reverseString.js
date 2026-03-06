/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */

// Notes:
// JavaScript strings do not have a built-in reverse() method. If you try to run "hello".reverse(), JavaScript will throw an error.
// However, arrays do have a reverse() method. So, to reverse a string, we simply borrow the array's tools. The concept boils down to a three-step pipeline: Split, Reverse, Join.

// ----------------------------------------------------

// Method 1: The Split-Reverse-Join Method (Functional Approach)
let str = "Hello World";

let reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString(str)); // dlroW olleH
