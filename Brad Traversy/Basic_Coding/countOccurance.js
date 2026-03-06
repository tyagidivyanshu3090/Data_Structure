/**
 * Counts the number of occurrences of a specific character in a string.
 * * @param {string} str - The string to search through (e.g., "Hello World").
 * @param {string} char - The character to look for (e.g., "l").
 * @returns {number} - The total count of that character found.
 */

// -------------------------------------------------------------
// Method 1: "lower-level" approach
function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences("Hello world", "l"));
