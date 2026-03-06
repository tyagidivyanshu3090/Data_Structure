/**
 * Finding the maximum number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The maximum number in the array.
 */

// ----------------------------------------------------

// Method 1: The Math.max() Method (Functional Approach)
// let arr = [1, 2, 3, 4, 5];

// let findMaxNumber = (arr) => Math.max(...arr);   // Spreading the array

// console.log(findMaxNumber(arr)); // 5

// ----------------------------------------------------

// Method 2: The Reduce() Method (Functional Approach)

// Since we have not defined the max value in the reduce method, it will take the first value as the max value

let arr2 = [1, 2, 3, 4, 5];

let findMaxNumber2 = (arr) =>
  arr.reduce((max, current) => Math.max(max, current));

console.log(findMaxNumber2(arr2)); // 5
