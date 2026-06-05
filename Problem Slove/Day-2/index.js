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


// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

function isPalindrome(str){
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reversed = clean.split("").reverse().join("");
    return clean === reversed;
}

console.log(isPalindrome("racecar"));


// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'


function titleCase(n){
  let names = n.split(" ");
  let output = []
  for (let i = 0; i < names.length; i++) {
     let r = names[i].charAt(0).toUpperCase() + names[i].slice(1);
     output.push(r)
  };
  return output.join(" ");
}

console.log(titleCase("hello world how are you have you good"));



// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.


function countChar(str,char){
  let count = 0;
  for (const s of str) {
    if(s === char){
      count++
    }
  };
  // return str.split(char).length - 1
  return count
}
console.log(countChar("habaiab","a"));
