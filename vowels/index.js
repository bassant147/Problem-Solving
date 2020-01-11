// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str) {
  let count = 0;
  const letters = ['a','e','o','u','i'];

  for(let char of str.toLowerCase()) {
    if(letters.includes(char)) count++;
  }
  return count;
}


/*
/////////////////////////
// RegEx Solution

function vowels(str) {
  const matches = str.match(/[aeoui]/gi);
  return matches ? matches.length : 0;
}

*/

module.exports = vowels;
