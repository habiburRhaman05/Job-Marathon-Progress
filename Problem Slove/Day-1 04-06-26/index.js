// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

function reverseString(str){
    // return str.split("").reverse().join("");
    let output = "";

    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i]
        
    }
    return output
};

console.log(reverseString("developer"));


// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.


function countVowels(str){
    let vowels = ["a","e","i","o","u"];
    let count =0;
  for (let i = 0; i < str.length; i++) {
    
    if(vowels.includes(str[i])){
      count++
    }
    
  }
  return count

};
console.log(countVowels("javascript"));
