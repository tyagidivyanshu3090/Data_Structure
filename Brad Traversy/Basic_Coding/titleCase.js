/**
 * @param {string} str - The string to be converted to title case. [ e.g., "i'm a LITTLE teaPot" ]
 * @returns {string} - The string in title case. [ "I'm A Little Teapot" ]
 */

let str = "i'm a LITTLE teaPot";

function titleCase(str) {
  let strLowerCase = str.toLowerCase(); // i'm a little teapot
  let strArray = strLowerCase.split(" "); // [ 'i'm', 'a', 'little', 'teapot' ]

  // Iterating the array
  for (let i = 0; i < strArray.length; i++) {
    //strArray[i][0] - Accessing the first character of the string
    //strArray[i].slice(1) - Accessing the rest of the string

    strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
    // strArray[i] = strArray[i]charAt(0).toUpperCase() + strArray[i].slice(1);
  }

  return strArray.join(" ");
}

console.log(titleCase(str));
